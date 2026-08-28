# `dataAwsccConnectcampaignsCampaign` Submodule <a name="`dataAwsccConnectcampaignsCampaign` Submodule" id="@cdktn/provider-awscc.dataAwsccConnectcampaignsCampaign"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsccConnectcampaignsCampaign <a name="DataAwsccConnectcampaignsCampaign" id="@cdktn/provider-awscc.dataAwsccConnectcampaignsCampaign.DataAwsccConnectcampaignsCampaign"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/data-sources/connectcampaigns_campaign awscc_connectcampaigns_campaign}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccConnectcampaignsCampaign.DataAwsccConnectcampaignsCampaign.Initializer"></a>

```typescript
import { dataAwsccConnectcampaignsCampaign } from '@cdktn/provider-awscc'

new dataAwsccConnectcampaignsCampaign.DataAwsccConnectcampaignsCampaign(scope: Construct, id: string, config: DataAwsccConnectcampaignsCampaignConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectcampaignsCampaign.DataAwsccConnectcampaignsCampaign.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectcampaignsCampaign.DataAwsccConnectcampaignsCampaign.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectcampaignsCampaign.DataAwsccConnectcampaignsCampaign.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccConnectcampaignsCampaign.DataAwsccConnectcampaignsCampaignConfig">DataAwsccConnectcampaignsCampaignConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccConnectcampaignsCampaign.DataAwsccConnectcampaignsCampaign.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccConnectcampaignsCampaign.DataAwsccConnectcampaignsCampaign.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.dataAwsccConnectcampaignsCampaign.DataAwsccConnectcampaignsCampaign.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccConnectcampaignsCampaign.DataAwsccConnectcampaignsCampaignConfig">DataAwsccConnectcampaignsCampaignConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectcampaignsCampaign.DataAwsccConnectcampaignsCampaign.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectcampaignsCampaign.DataAwsccConnectcampaignsCampaign.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectcampaignsCampaign.DataAwsccConnectcampaignsCampaign.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectcampaignsCampaign.DataAwsccConnectcampaignsCampaign.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectcampaignsCampaign.DataAwsccConnectcampaignsCampaign.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectcampaignsCampaign.DataAwsccConnectcampaignsCampaign.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectcampaignsCampaign.DataAwsccConnectcampaignsCampaign.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectcampaignsCampaign.DataAwsccConnectcampaignsCampaign.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectcampaignsCampaign.DataAwsccConnectcampaignsCampaign.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectcampaignsCampaign.DataAwsccConnectcampaignsCampaign.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectcampaignsCampaign.DataAwsccConnectcampaignsCampaign.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectcampaignsCampaign.DataAwsccConnectcampaignsCampaign.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectcampaignsCampaign.DataAwsccConnectcampaignsCampaign.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectcampaignsCampaign.DataAwsccConnectcampaignsCampaign.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectcampaignsCampaign.DataAwsccConnectcampaignsCampaign.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectcampaignsCampaign.DataAwsccConnectcampaignsCampaign.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectcampaignsCampaign.DataAwsccConnectcampaignsCampaign.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectcampaignsCampaign.DataAwsccConnectcampaignsCampaign.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccConnectcampaignsCampaign.DataAwsccConnectcampaignsCampaign.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.dataAwsccConnectcampaignsCampaign.DataAwsccConnectcampaignsCampaign.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.dataAwsccConnectcampaignsCampaign.DataAwsccConnectcampaignsCampaign.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.dataAwsccConnectcampaignsCampaign.DataAwsccConnectcampaignsCampaign.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.dataAwsccConnectcampaignsCampaign.DataAwsccConnectcampaignsCampaign.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccConnectcampaignsCampaign.DataAwsccConnectcampaignsCampaign.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.dataAwsccConnectcampaignsCampaign.DataAwsccConnectcampaignsCampaign.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.dataAwsccConnectcampaignsCampaign.DataAwsccConnectcampaignsCampaign.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccConnectcampaignsCampaign.DataAwsccConnectcampaignsCampaign.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.dataAwsccConnectcampaignsCampaign.DataAwsccConnectcampaignsCampaign.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.dataAwsccConnectcampaignsCampaign.DataAwsccConnectcampaignsCampaign.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.dataAwsccConnectcampaignsCampaign.DataAwsccConnectcampaignsCampaign.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccConnectcampaignsCampaign.DataAwsccConnectcampaignsCampaign.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectcampaignsCampaign.DataAwsccConnectcampaignsCampaign.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccConnectcampaignsCampaign.DataAwsccConnectcampaignsCampaign.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectcampaignsCampaign.DataAwsccConnectcampaignsCampaign.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccConnectcampaignsCampaign.DataAwsccConnectcampaignsCampaign.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectcampaignsCampaign.DataAwsccConnectcampaignsCampaign.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccConnectcampaignsCampaign.DataAwsccConnectcampaignsCampaign.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectcampaignsCampaign.DataAwsccConnectcampaignsCampaign.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccConnectcampaignsCampaign.DataAwsccConnectcampaignsCampaign.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectcampaignsCampaign.DataAwsccConnectcampaignsCampaign.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccConnectcampaignsCampaign.DataAwsccConnectcampaignsCampaign.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectcampaignsCampaign.DataAwsccConnectcampaignsCampaign.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccConnectcampaignsCampaign.DataAwsccConnectcampaignsCampaign.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectcampaignsCampaign.DataAwsccConnectcampaignsCampaign.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccConnectcampaignsCampaign.DataAwsccConnectcampaignsCampaign.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectcampaignsCampaign.DataAwsccConnectcampaignsCampaign.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccConnectcampaignsCampaign.DataAwsccConnectcampaignsCampaign.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectcampaignsCampaign.DataAwsccConnectcampaignsCampaign.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccConnectcampaignsCampaign.DataAwsccConnectcampaignsCampaign.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectcampaignsCampaign.DataAwsccConnectcampaignsCampaign.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectcampaignsCampaign.DataAwsccConnectcampaignsCampaign.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectcampaignsCampaign.DataAwsccConnectcampaignsCampaign.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectcampaignsCampaign.DataAwsccConnectcampaignsCampaign.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectcampaignsCampaign.DataAwsccConnectcampaignsCampaign.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a DataAwsccConnectcampaignsCampaign resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.dataAwsccConnectcampaignsCampaign.DataAwsccConnectcampaignsCampaign.isConstruct"></a>

```typescript
import { dataAwsccConnectcampaignsCampaign } from '@cdktn/provider-awscc'

dataAwsccConnectcampaignsCampaign.DataAwsccConnectcampaignsCampaign.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccConnectcampaignsCampaign.DataAwsccConnectcampaignsCampaign.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.dataAwsccConnectcampaignsCampaign.DataAwsccConnectcampaignsCampaign.isTerraformElement"></a>

```typescript
import { dataAwsccConnectcampaignsCampaign } from '@cdktn/provider-awscc'

dataAwsccConnectcampaignsCampaign.DataAwsccConnectcampaignsCampaign.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccConnectcampaignsCampaign.DataAwsccConnectcampaignsCampaign.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktn/provider-awscc.dataAwsccConnectcampaignsCampaign.DataAwsccConnectcampaignsCampaign.isTerraformDataSource"></a>

```typescript
import { dataAwsccConnectcampaignsCampaign } from '@cdktn/provider-awscc'

dataAwsccConnectcampaignsCampaign.DataAwsccConnectcampaignsCampaign.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccConnectcampaignsCampaign.DataAwsccConnectcampaignsCampaign.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.dataAwsccConnectcampaignsCampaign.DataAwsccConnectcampaignsCampaign.generateConfigForImport"></a>

```typescript
import { dataAwsccConnectcampaignsCampaign } from '@cdktn/provider-awscc'

dataAwsccConnectcampaignsCampaign.DataAwsccConnectcampaignsCampaign.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a DataAwsccConnectcampaignsCampaign resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccConnectcampaignsCampaign.DataAwsccConnectcampaignsCampaign.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.dataAwsccConnectcampaignsCampaign.DataAwsccConnectcampaignsCampaign.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataAwsccConnectcampaignsCampaign to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.dataAwsccConnectcampaignsCampaign.DataAwsccConnectcampaignsCampaign.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataAwsccConnectcampaignsCampaign that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/data-sources/connectcampaigns_campaign#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccConnectcampaignsCampaign.DataAwsccConnectcampaignsCampaign.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsccConnectcampaignsCampaign to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectcampaignsCampaign.DataAwsccConnectcampaignsCampaign.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectcampaignsCampaign.DataAwsccConnectcampaignsCampaign.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectcampaignsCampaign.DataAwsccConnectcampaignsCampaign.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectcampaignsCampaign.DataAwsccConnectcampaignsCampaign.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectcampaignsCampaign.DataAwsccConnectcampaignsCampaign.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectcampaignsCampaign.DataAwsccConnectcampaignsCampaign.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectcampaignsCampaign.DataAwsccConnectcampaignsCampaign.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectcampaignsCampaign.DataAwsccConnectcampaignsCampaign.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectcampaignsCampaign.DataAwsccConnectcampaignsCampaign.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectcampaignsCampaign.DataAwsccConnectcampaignsCampaign.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectcampaignsCampaign.DataAwsccConnectcampaignsCampaign.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectcampaignsCampaign.DataAwsccConnectcampaignsCampaign.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectcampaignsCampaign.DataAwsccConnectcampaignsCampaign.property.arn">arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectcampaignsCampaign.DataAwsccConnectcampaignsCampaign.property.connectInstanceArn">connectInstanceArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectcampaignsCampaign.DataAwsccConnectcampaignsCampaign.property.dialerConfig">dialerConfig</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccConnectcampaignsCampaign.DataAwsccConnectcampaignsCampaignDialerConfigOutputReference">DataAwsccConnectcampaignsCampaignDialerConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectcampaignsCampaign.DataAwsccConnectcampaignsCampaign.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectcampaignsCampaign.DataAwsccConnectcampaignsCampaign.property.outboundCallConfig">outboundCallConfig</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccConnectcampaignsCampaign.DataAwsccConnectcampaignsCampaignOutboundCallConfigOutputReference">DataAwsccConnectcampaignsCampaignOutboundCallConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectcampaignsCampaign.DataAwsccConnectcampaignsCampaign.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccConnectcampaignsCampaign.DataAwsccConnectcampaignsCampaignTagsList">DataAwsccConnectcampaignsCampaignTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectcampaignsCampaign.DataAwsccConnectcampaignsCampaign.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectcampaignsCampaign.DataAwsccConnectcampaignsCampaign.property.id">id</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.dataAwsccConnectcampaignsCampaign.DataAwsccConnectcampaignsCampaign.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.dataAwsccConnectcampaignsCampaign.DataAwsccConnectcampaignsCampaign.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccConnectcampaignsCampaign.DataAwsccConnectcampaignsCampaign.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.dataAwsccConnectcampaignsCampaign.DataAwsccConnectcampaignsCampaign.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.dataAwsccConnectcampaignsCampaign.DataAwsccConnectcampaignsCampaign.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.dataAwsccConnectcampaignsCampaign.DataAwsccConnectcampaignsCampaign.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.dataAwsccConnectcampaignsCampaign.DataAwsccConnectcampaignsCampaign.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccConnectcampaignsCampaign.DataAwsccConnectcampaignsCampaign.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.dataAwsccConnectcampaignsCampaign.DataAwsccConnectcampaignsCampaign.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.dataAwsccConnectcampaignsCampaign.DataAwsccConnectcampaignsCampaign.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccConnectcampaignsCampaign.DataAwsccConnectcampaignsCampaign.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccConnectcampaignsCampaign.DataAwsccConnectcampaignsCampaign.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-awscc.dataAwsccConnectcampaignsCampaign.DataAwsccConnectcampaignsCampaign.property.arn"></a>

```typescript
public readonly arn: string;
```

- *Type:* string

---

##### `connectInstanceArn`<sup>Required</sup> <a name="connectInstanceArn" id="@cdktn/provider-awscc.dataAwsccConnectcampaignsCampaign.DataAwsccConnectcampaignsCampaign.property.connectInstanceArn"></a>

```typescript
public readonly connectInstanceArn: string;
```

- *Type:* string

---

##### `dialerConfig`<sup>Required</sup> <a name="dialerConfig" id="@cdktn/provider-awscc.dataAwsccConnectcampaignsCampaign.DataAwsccConnectcampaignsCampaign.property.dialerConfig"></a>

```typescript
public readonly dialerConfig: DataAwsccConnectcampaignsCampaignDialerConfigOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccConnectcampaignsCampaign.DataAwsccConnectcampaignsCampaignDialerConfigOutputReference">DataAwsccConnectcampaignsCampaignDialerConfigOutputReference</a>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.dataAwsccConnectcampaignsCampaign.DataAwsccConnectcampaignsCampaign.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `outboundCallConfig`<sup>Required</sup> <a name="outboundCallConfig" id="@cdktn/provider-awscc.dataAwsccConnectcampaignsCampaign.DataAwsccConnectcampaignsCampaign.property.outboundCallConfig"></a>

```typescript
public readonly outboundCallConfig: DataAwsccConnectcampaignsCampaignOutboundCallConfigOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccConnectcampaignsCampaign.DataAwsccConnectcampaignsCampaignOutboundCallConfigOutputReference">DataAwsccConnectcampaignsCampaignOutboundCallConfigOutputReference</a>

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.dataAwsccConnectcampaignsCampaign.DataAwsccConnectcampaignsCampaign.property.tags"></a>

```typescript
public readonly tags: DataAwsccConnectcampaignsCampaignTagsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccConnectcampaignsCampaign.DataAwsccConnectcampaignsCampaignTagsList">DataAwsccConnectcampaignsCampaignTagsList</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-awscc.dataAwsccConnectcampaignsCampaign.DataAwsccConnectcampaignsCampaign.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccConnectcampaignsCampaign.DataAwsccConnectcampaignsCampaign.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectcampaignsCampaign.DataAwsccConnectcampaignsCampaign.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.dataAwsccConnectcampaignsCampaign.DataAwsccConnectcampaignsCampaign.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsccConnectcampaignsCampaignConfig <a name="DataAwsccConnectcampaignsCampaignConfig" id="@cdktn/provider-awscc.dataAwsccConnectcampaignsCampaign.DataAwsccConnectcampaignsCampaignConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccConnectcampaignsCampaign.DataAwsccConnectcampaignsCampaignConfig.Initializer"></a>

```typescript
import { dataAwsccConnectcampaignsCampaign } from '@cdktn/provider-awscc'

const dataAwsccConnectcampaignsCampaignConfig: dataAwsccConnectcampaignsCampaign.DataAwsccConnectcampaignsCampaignConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectcampaignsCampaign.DataAwsccConnectcampaignsCampaignConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectcampaignsCampaign.DataAwsccConnectcampaignsCampaignConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectcampaignsCampaign.DataAwsccConnectcampaignsCampaignConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectcampaignsCampaign.DataAwsccConnectcampaignsCampaignConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectcampaignsCampaign.DataAwsccConnectcampaignsCampaignConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectcampaignsCampaign.DataAwsccConnectcampaignsCampaignConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectcampaignsCampaign.DataAwsccConnectcampaignsCampaignConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectcampaignsCampaign.DataAwsccConnectcampaignsCampaignConfig.property.id">id</a></code> | <code>string</code> | Uniquely identifies the resource. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.dataAwsccConnectcampaignsCampaign.DataAwsccConnectcampaignsCampaignConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccConnectcampaignsCampaign.DataAwsccConnectcampaignsCampaignConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.dataAwsccConnectcampaignsCampaign.DataAwsccConnectcampaignsCampaignConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.dataAwsccConnectcampaignsCampaign.DataAwsccConnectcampaignsCampaignConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccConnectcampaignsCampaign.DataAwsccConnectcampaignsCampaignConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccConnectcampaignsCampaign.DataAwsccConnectcampaignsCampaignConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.dataAwsccConnectcampaignsCampaign.DataAwsccConnectcampaignsCampaignConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccConnectcampaignsCampaign.DataAwsccConnectcampaignsCampaignConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/data-sources/connectcampaigns_campaign#id DataAwsccConnectcampaignsCampaign#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAwsccConnectcampaignsCampaignDialerConfig <a name="DataAwsccConnectcampaignsCampaignDialerConfig" id="@cdktn/provider-awscc.dataAwsccConnectcampaignsCampaign.DataAwsccConnectcampaignsCampaignDialerConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccConnectcampaignsCampaign.DataAwsccConnectcampaignsCampaignDialerConfig.Initializer"></a>

```typescript
import { dataAwsccConnectcampaignsCampaign } from '@cdktn/provider-awscc'

const dataAwsccConnectcampaignsCampaignDialerConfig: dataAwsccConnectcampaignsCampaign.DataAwsccConnectcampaignsCampaignDialerConfig = { ... }
```


### DataAwsccConnectcampaignsCampaignDialerConfigAgentlessDialerConfig <a name="DataAwsccConnectcampaignsCampaignDialerConfigAgentlessDialerConfig" id="@cdktn/provider-awscc.dataAwsccConnectcampaignsCampaign.DataAwsccConnectcampaignsCampaignDialerConfigAgentlessDialerConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccConnectcampaignsCampaign.DataAwsccConnectcampaignsCampaignDialerConfigAgentlessDialerConfig.Initializer"></a>

```typescript
import { dataAwsccConnectcampaignsCampaign } from '@cdktn/provider-awscc'

const dataAwsccConnectcampaignsCampaignDialerConfigAgentlessDialerConfig: dataAwsccConnectcampaignsCampaign.DataAwsccConnectcampaignsCampaignDialerConfigAgentlessDialerConfig = { ... }
```


### DataAwsccConnectcampaignsCampaignDialerConfigPredictiveDialerConfig <a name="DataAwsccConnectcampaignsCampaignDialerConfigPredictiveDialerConfig" id="@cdktn/provider-awscc.dataAwsccConnectcampaignsCampaign.DataAwsccConnectcampaignsCampaignDialerConfigPredictiveDialerConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccConnectcampaignsCampaign.DataAwsccConnectcampaignsCampaignDialerConfigPredictiveDialerConfig.Initializer"></a>

```typescript
import { dataAwsccConnectcampaignsCampaign } from '@cdktn/provider-awscc'

const dataAwsccConnectcampaignsCampaignDialerConfigPredictiveDialerConfig: dataAwsccConnectcampaignsCampaign.DataAwsccConnectcampaignsCampaignDialerConfigPredictiveDialerConfig = { ... }
```


### DataAwsccConnectcampaignsCampaignDialerConfigProgressiveDialerConfig <a name="DataAwsccConnectcampaignsCampaignDialerConfigProgressiveDialerConfig" id="@cdktn/provider-awscc.dataAwsccConnectcampaignsCampaign.DataAwsccConnectcampaignsCampaignDialerConfigProgressiveDialerConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccConnectcampaignsCampaign.DataAwsccConnectcampaignsCampaignDialerConfigProgressiveDialerConfig.Initializer"></a>

```typescript
import { dataAwsccConnectcampaignsCampaign } from '@cdktn/provider-awscc'

const dataAwsccConnectcampaignsCampaignDialerConfigProgressiveDialerConfig: dataAwsccConnectcampaignsCampaign.DataAwsccConnectcampaignsCampaignDialerConfigProgressiveDialerConfig = { ... }
```


### DataAwsccConnectcampaignsCampaignOutboundCallConfig <a name="DataAwsccConnectcampaignsCampaignOutboundCallConfig" id="@cdktn/provider-awscc.dataAwsccConnectcampaignsCampaign.DataAwsccConnectcampaignsCampaignOutboundCallConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccConnectcampaignsCampaign.DataAwsccConnectcampaignsCampaignOutboundCallConfig.Initializer"></a>

```typescript
import { dataAwsccConnectcampaignsCampaign } from '@cdktn/provider-awscc'

const dataAwsccConnectcampaignsCampaignOutboundCallConfig: dataAwsccConnectcampaignsCampaign.DataAwsccConnectcampaignsCampaignOutboundCallConfig = { ... }
```


### DataAwsccConnectcampaignsCampaignOutboundCallConfigAnswerMachineDetectionConfig <a name="DataAwsccConnectcampaignsCampaignOutboundCallConfigAnswerMachineDetectionConfig" id="@cdktn/provider-awscc.dataAwsccConnectcampaignsCampaign.DataAwsccConnectcampaignsCampaignOutboundCallConfigAnswerMachineDetectionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccConnectcampaignsCampaign.DataAwsccConnectcampaignsCampaignOutboundCallConfigAnswerMachineDetectionConfig.Initializer"></a>

```typescript
import { dataAwsccConnectcampaignsCampaign } from '@cdktn/provider-awscc'

const dataAwsccConnectcampaignsCampaignOutboundCallConfigAnswerMachineDetectionConfig: dataAwsccConnectcampaignsCampaign.DataAwsccConnectcampaignsCampaignOutboundCallConfigAnswerMachineDetectionConfig = { ... }
```


### DataAwsccConnectcampaignsCampaignTags <a name="DataAwsccConnectcampaignsCampaignTags" id="@cdktn/provider-awscc.dataAwsccConnectcampaignsCampaign.DataAwsccConnectcampaignsCampaignTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccConnectcampaignsCampaign.DataAwsccConnectcampaignsCampaignTags.Initializer"></a>

```typescript
import { dataAwsccConnectcampaignsCampaign } from '@cdktn/provider-awscc'

const dataAwsccConnectcampaignsCampaignTags: dataAwsccConnectcampaignsCampaign.DataAwsccConnectcampaignsCampaignTags = { ... }
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsccConnectcampaignsCampaignDialerConfigAgentlessDialerConfigOutputReference <a name="DataAwsccConnectcampaignsCampaignDialerConfigAgentlessDialerConfigOutputReference" id="@cdktn/provider-awscc.dataAwsccConnectcampaignsCampaign.DataAwsccConnectcampaignsCampaignDialerConfigAgentlessDialerConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccConnectcampaignsCampaign.DataAwsccConnectcampaignsCampaignDialerConfigAgentlessDialerConfigOutputReference.Initializer"></a>

```typescript
import { dataAwsccConnectcampaignsCampaign } from '@cdktn/provider-awscc'

new dataAwsccConnectcampaignsCampaign.DataAwsccConnectcampaignsCampaignDialerConfigAgentlessDialerConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectcampaignsCampaign.DataAwsccConnectcampaignsCampaignDialerConfigAgentlessDialerConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectcampaignsCampaign.DataAwsccConnectcampaignsCampaignDialerConfigAgentlessDialerConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccConnectcampaignsCampaign.DataAwsccConnectcampaignsCampaignDialerConfigAgentlessDialerConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectcampaignsCampaign.DataAwsccConnectcampaignsCampaignDialerConfigAgentlessDialerConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectcampaignsCampaign.DataAwsccConnectcampaignsCampaignDialerConfigAgentlessDialerConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectcampaignsCampaign.DataAwsccConnectcampaignsCampaignDialerConfigAgentlessDialerConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectcampaignsCampaign.DataAwsccConnectcampaignsCampaignDialerConfigAgentlessDialerConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectcampaignsCampaign.DataAwsccConnectcampaignsCampaignDialerConfigAgentlessDialerConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectcampaignsCampaign.DataAwsccConnectcampaignsCampaignDialerConfigAgentlessDialerConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectcampaignsCampaign.DataAwsccConnectcampaignsCampaignDialerConfigAgentlessDialerConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectcampaignsCampaign.DataAwsccConnectcampaignsCampaignDialerConfigAgentlessDialerConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectcampaignsCampaign.DataAwsccConnectcampaignsCampaignDialerConfigAgentlessDialerConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectcampaignsCampaign.DataAwsccConnectcampaignsCampaignDialerConfigAgentlessDialerConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectcampaignsCampaign.DataAwsccConnectcampaignsCampaignDialerConfigAgentlessDialerConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectcampaignsCampaign.DataAwsccConnectcampaignsCampaignDialerConfigAgentlessDialerConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectcampaignsCampaign.DataAwsccConnectcampaignsCampaignDialerConfigAgentlessDialerConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectcampaignsCampaign.DataAwsccConnectcampaignsCampaignDialerConfigAgentlessDialerConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccConnectcampaignsCampaign.DataAwsccConnectcampaignsCampaignDialerConfigAgentlessDialerConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccConnectcampaignsCampaign.DataAwsccConnectcampaignsCampaignDialerConfigAgentlessDialerConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectcampaignsCampaign.DataAwsccConnectcampaignsCampaignDialerConfigAgentlessDialerConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccConnectcampaignsCampaign.DataAwsccConnectcampaignsCampaignDialerConfigAgentlessDialerConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectcampaignsCampaign.DataAwsccConnectcampaignsCampaignDialerConfigAgentlessDialerConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccConnectcampaignsCampaign.DataAwsccConnectcampaignsCampaignDialerConfigAgentlessDialerConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectcampaignsCampaign.DataAwsccConnectcampaignsCampaignDialerConfigAgentlessDialerConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccConnectcampaignsCampaign.DataAwsccConnectcampaignsCampaignDialerConfigAgentlessDialerConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectcampaignsCampaign.DataAwsccConnectcampaignsCampaignDialerConfigAgentlessDialerConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccConnectcampaignsCampaign.DataAwsccConnectcampaignsCampaignDialerConfigAgentlessDialerConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectcampaignsCampaign.DataAwsccConnectcampaignsCampaignDialerConfigAgentlessDialerConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccConnectcampaignsCampaign.DataAwsccConnectcampaignsCampaignDialerConfigAgentlessDialerConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectcampaignsCampaign.DataAwsccConnectcampaignsCampaignDialerConfigAgentlessDialerConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccConnectcampaignsCampaign.DataAwsccConnectcampaignsCampaignDialerConfigAgentlessDialerConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectcampaignsCampaign.DataAwsccConnectcampaignsCampaignDialerConfigAgentlessDialerConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccConnectcampaignsCampaign.DataAwsccConnectcampaignsCampaignDialerConfigAgentlessDialerConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectcampaignsCampaign.DataAwsccConnectcampaignsCampaignDialerConfigAgentlessDialerConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccConnectcampaignsCampaign.DataAwsccConnectcampaignsCampaignDialerConfigAgentlessDialerConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectcampaignsCampaign.DataAwsccConnectcampaignsCampaignDialerConfigAgentlessDialerConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccConnectcampaignsCampaign.DataAwsccConnectcampaignsCampaignDialerConfigAgentlessDialerConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccConnectcampaignsCampaign.DataAwsccConnectcampaignsCampaignDialerConfigAgentlessDialerConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccConnectcampaignsCampaign.DataAwsccConnectcampaignsCampaignDialerConfigAgentlessDialerConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccConnectcampaignsCampaign.DataAwsccConnectcampaignsCampaignDialerConfigAgentlessDialerConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccConnectcampaignsCampaign.DataAwsccConnectcampaignsCampaignDialerConfigAgentlessDialerConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectcampaignsCampaign.DataAwsccConnectcampaignsCampaignDialerConfigAgentlessDialerConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectcampaignsCampaign.DataAwsccConnectcampaignsCampaignDialerConfigAgentlessDialerConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectcampaignsCampaign.DataAwsccConnectcampaignsCampaignDialerConfigAgentlessDialerConfigOutputReference.property.dialingCapacity">dialingCapacity</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectcampaignsCampaign.DataAwsccConnectcampaignsCampaignDialerConfigAgentlessDialerConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccConnectcampaignsCampaign.DataAwsccConnectcampaignsCampaignDialerConfigAgentlessDialerConfig">DataAwsccConnectcampaignsCampaignDialerConfigAgentlessDialerConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccConnectcampaignsCampaign.DataAwsccConnectcampaignsCampaignDialerConfigAgentlessDialerConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccConnectcampaignsCampaign.DataAwsccConnectcampaignsCampaignDialerConfigAgentlessDialerConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `dialingCapacity`<sup>Required</sup> <a name="dialingCapacity" id="@cdktn/provider-awscc.dataAwsccConnectcampaignsCampaign.DataAwsccConnectcampaignsCampaignDialerConfigAgentlessDialerConfigOutputReference.property.dialingCapacity"></a>

```typescript
public readonly dialingCapacity: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccConnectcampaignsCampaign.DataAwsccConnectcampaignsCampaignDialerConfigAgentlessDialerConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccConnectcampaignsCampaignDialerConfigAgentlessDialerConfig;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccConnectcampaignsCampaign.DataAwsccConnectcampaignsCampaignDialerConfigAgentlessDialerConfig">DataAwsccConnectcampaignsCampaignDialerConfigAgentlessDialerConfig</a>

---


### DataAwsccConnectcampaignsCampaignDialerConfigOutputReference <a name="DataAwsccConnectcampaignsCampaignDialerConfigOutputReference" id="@cdktn/provider-awscc.dataAwsccConnectcampaignsCampaign.DataAwsccConnectcampaignsCampaignDialerConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccConnectcampaignsCampaign.DataAwsccConnectcampaignsCampaignDialerConfigOutputReference.Initializer"></a>

```typescript
import { dataAwsccConnectcampaignsCampaign } from '@cdktn/provider-awscc'

new dataAwsccConnectcampaignsCampaign.DataAwsccConnectcampaignsCampaignDialerConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectcampaignsCampaign.DataAwsccConnectcampaignsCampaignDialerConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectcampaignsCampaign.DataAwsccConnectcampaignsCampaignDialerConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccConnectcampaignsCampaign.DataAwsccConnectcampaignsCampaignDialerConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectcampaignsCampaign.DataAwsccConnectcampaignsCampaignDialerConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectcampaignsCampaign.DataAwsccConnectcampaignsCampaignDialerConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectcampaignsCampaign.DataAwsccConnectcampaignsCampaignDialerConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectcampaignsCampaign.DataAwsccConnectcampaignsCampaignDialerConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectcampaignsCampaign.DataAwsccConnectcampaignsCampaignDialerConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectcampaignsCampaign.DataAwsccConnectcampaignsCampaignDialerConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectcampaignsCampaign.DataAwsccConnectcampaignsCampaignDialerConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectcampaignsCampaign.DataAwsccConnectcampaignsCampaignDialerConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectcampaignsCampaign.DataAwsccConnectcampaignsCampaignDialerConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectcampaignsCampaign.DataAwsccConnectcampaignsCampaignDialerConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectcampaignsCampaign.DataAwsccConnectcampaignsCampaignDialerConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectcampaignsCampaign.DataAwsccConnectcampaignsCampaignDialerConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectcampaignsCampaign.DataAwsccConnectcampaignsCampaignDialerConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectcampaignsCampaign.DataAwsccConnectcampaignsCampaignDialerConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccConnectcampaignsCampaign.DataAwsccConnectcampaignsCampaignDialerConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccConnectcampaignsCampaign.DataAwsccConnectcampaignsCampaignDialerConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectcampaignsCampaign.DataAwsccConnectcampaignsCampaignDialerConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccConnectcampaignsCampaign.DataAwsccConnectcampaignsCampaignDialerConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectcampaignsCampaign.DataAwsccConnectcampaignsCampaignDialerConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccConnectcampaignsCampaign.DataAwsccConnectcampaignsCampaignDialerConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectcampaignsCampaign.DataAwsccConnectcampaignsCampaignDialerConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccConnectcampaignsCampaign.DataAwsccConnectcampaignsCampaignDialerConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectcampaignsCampaign.DataAwsccConnectcampaignsCampaignDialerConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccConnectcampaignsCampaign.DataAwsccConnectcampaignsCampaignDialerConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectcampaignsCampaign.DataAwsccConnectcampaignsCampaignDialerConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccConnectcampaignsCampaign.DataAwsccConnectcampaignsCampaignDialerConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectcampaignsCampaign.DataAwsccConnectcampaignsCampaignDialerConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccConnectcampaignsCampaign.DataAwsccConnectcampaignsCampaignDialerConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectcampaignsCampaign.DataAwsccConnectcampaignsCampaignDialerConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccConnectcampaignsCampaign.DataAwsccConnectcampaignsCampaignDialerConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectcampaignsCampaign.DataAwsccConnectcampaignsCampaignDialerConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccConnectcampaignsCampaign.DataAwsccConnectcampaignsCampaignDialerConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectcampaignsCampaign.DataAwsccConnectcampaignsCampaignDialerConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccConnectcampaignsCampaign.DataAwsccConnectcampaignsCampaignDialerConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccConnectcampaignsCampaign.DataAwsccConnectcampaignsCampaignDialerConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccConnectcampaignsCampaign.DataAwsccConnectcampaignsCampaignDialerConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccConnectcampaignsCampaign.DataAwsccConnectcampaignsCampaignDialerConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccConnectcampaignsCampaign.DataAwsccConnectcampaignsCampaignDialerConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectcampaignsCampaign.DataAwsccConnectcampaignsCampaignDialerConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectcampaignsCampaign.DataAwsccConnectcampaignsCampaignDialerConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectcampaignsCampaign.DataAwsccConnectcampaignsCampaignDialerConfigOutputReference.property.agentlessDialerConfig">agentlessDialerConfig</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccConnectcampaignsCampaign.DataAwsccConnectcampaignsCampaignDialerConfigAgentlessDialerConfigOutputReference">DataAwsccConnectcampaignsCampaignDialerConfigAgentlessDialerConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectcampaignsCampaign.DataAwsccConnectcampaignsCampaignDialerConfigOutputReference.property.predictiveDialerConfig">predictiveDialerConfig</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccConnectcampaignsCampaign.DataAwsccConnectcampaignsCampaignDialerConfigPredictiveDialerConfigOutputReference">DataAwsccConnectcampaignsCampaignDialerConfigPredictiveDialerConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectcampaignsCampaign.DataAwsccConnectcampaignsCampaignDialerConfigOutputReference.property.progressiveDialerConfig">progressiveDialerConfig</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccConnectcampaignsCampaign.DataAwsccConnectcampaignsCampaignDialerConfigProgressiveDialerConfigOutputReference">DataAwsccConnectcampaignsCampaignDialerConfigProgressiveDialerConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectcampaignsCampaign.DataAwsccConnectcampaignsCampaignDialerConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccConnectcampaignsCampaign.DataAwsccConnectcampaignsCampaignDialerConfig">DataAwsccConnectcampaignsCampaignDialerConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccConnectcampaignsCampaign.DataAwsccConnectcampaignsCampaignDialerConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccConnectcampaignsCampaign.DataAwsccConnectcampaignsCampaignDialerConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `agentlessDialerConfig`<sup>Required</sup> <a name="agentlessDialerConfig" id="@cdktn/provider-awscc.dataAwsccConnectcampaignsCampaign.DataAwsccConnectcampaignsCampaignDialerConfigOutputReference.property.agentlessDialerConfig"></a>

```typescript
public readonly agentlessDialerConfig: DataAwsccConnectcampaignsCampaignDialerConfigAgentlessDialerConfigOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccConnectcampaignsCampaign.DataAwsccConnectcampaignsCampaignDialerConfigAgentlessDialerConfigOutputReference">DataAwsccConnectcampaignsCampaignDialerConfigAgentlessDialerConfigOutputReference</a>

---

##### `predictiveDialerConfig`<sup>Required</sup> <a name="predictiveDialerConfig" id="@cdktn/provider-awscc.dataAwsccConnectcampaignsCampaign.DataAwsccConnectcampaignsCampaignDialerConfigOutputReference.property.predictiveDialerConfig"></a>

```typescript
public readonly predictiveDialerConfig: DataAwsccConnectcampaignsCampaignDialerConfigPredictiveDialerConfigOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccConnectcampaignsCampaign.DataAwsccConnectcampaignsCampaignDialerConfigPredictiveDialerConfigOutputReference">DataAwsccConnectcampaignsCampaignDialerConfigPredictiveDialerConfigOutputReference</a>

---

##### `progressiveDialerConfig`<sup>Required</sup> <a name="progressiveDialerConfig" id="@cdktn/provider-awscc.dataAwsccConnectcampaignsCampaign.DataAwsccConnectcampaignsCampaignDialerConfigOutputReference.property.progressiveDialerConfig"></a>

```typescript
public readonly progressiveDialerConfig: DataAwsccConnectcampaignsCampaignDialerConfigProgressiveDialerConfigOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccConnectcampaignsCampaign.DataAwsccConnectcampaignsCampaignDialerConfigProgressiveDialerConfigOutputReference">DataAwsccConnectcampaignsCampaignDialerConfigProgressiveDialerConfigOutputReference</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccConnectcampaignsCampaign.DataAwsccConnectcampaignsCampaignDialerConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccConnectcampaignsCampaignDialerConfig;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccConnectcampaignsCampaign.DataAwsccConnectcampaignsCampaignDialerConfig">DataAwsccConnectcampaignsCampaignDialerConfig</a>

---


### DataAwsccConnectcampaignsCampaignDialerConfigPredictiveDialerConfigOutputReference <a name="DataAwsccConnectcampaignsCampaignDialerConfigPredictiveDialerConfigOutputReference" id="@cdktn/provider-awscc.dataAwsccConnectcampaignsCampaign.DataAwsccConnectcampaignsCampaignDialerConfigPredictiveDialerConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccConnectcampaignsCampaign.DataAwsccConnectcampaignsCampaignDialerConfigPredictiveDialerConfigOutputReference.Initializer"></a>

```typescript
import { dataAwsccConnectcampaignsCampaign } from '@cdktn/provider-awscc'

new dataAwsccConnectcampaignsCampaign.DataAwsccConnectcampaignsCampaignDialerConfigPredictiveDialerConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectcampaignsCampaign.DataAwsccConnectcampaignsCampaignDialerConfigPredictiveDialerConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectcampaignsCampaign.DataAwsccConnectcampaignsCampaignDialerConfigPredictiveDialerConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccConnectcampaignsCampaign.DataAwsccConnectcampaignsCampaignDialerConfigPredictiveDialerConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectcampaignsCampaign.DataAwsccConnectcampaignsCampaignDialerConfigPredictiveDialerConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectcampaignsCampaign.DataAwsccConnectcampaignsCampaignDialerConfigPredictiveDialerConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectcampaignsCampaign.DataAwsccConnectcampaignsCampaignDialerConfigPredictiveDialerConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectcampaignsCampaign.DataAwsccConnectcampaignsCampaignDialerConfigPredictiveDialerConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectcampaignsCampaign.DataAwsccConnectcampaignsCampaignDialerConfigPredictiveDialerConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectcampaignsCampaign.DataAwsccConnectcampaignsCampaignDialerConfigPredictiveDialerConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectcampaignsCampaign.DataAwsccConnectcampaignsCampaignDialerConfigPredictiveDialerConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectcampaignsCampaign.DataAwsccConnectcampaignsCampaignDialerConfigPredictiveDialerConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectcampaignsCampaign.DataAwsccConnectcampaignsCampaignDialerConfigPredictiveDialerConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectcampaignsCampaign.DataAwsccConnectcampaignsCampaignDialerConfigPredictiveDialerConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectcampaignsCampaign.DataAwsccConnectcampaignsCampaignDialerConfigPredictiveDialerConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectcampaignsCampaign.DataAwsccConnectcampaignsCampaignDialerConfigPredictiveDialerConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectcampaignsCampaign.DataAwsccConnectcampaignsCampaignDialerConfigPredictiveDialerConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectcampaignsCampaign.DataAwsccConnectcampaignsCampaignDialerConfigPredictiveDialerConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccConnectcampaignsCampaign.DataAwsccConnectcampaignsCampaignDialerConfigPredictiveDialerConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccConnectcampaignsCampaign.DataAwsccConnectcampaignsCampaignDialerConfigPredictiveDialerConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectcampaignsCampaign.DataAwsccConnectcampaignsCampaignDialerConfigPredictiveDialerConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccConnectcampaignsCampaign.DataAwsccConnectcampaignsCampaignDialerConfigPredictiveDialerConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectcampaignsCampaign.DataAwsccConnectcampaignsCampaignDialerConfigPredictiveDialerConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccConnectcampaignsCampaign.DataAwsccConnectcampaignsCampaignDialerConfigPredictiveDialerConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectcampaignsCampaign.DataAwsccConnectcampaignsCampaignDialerConfigPredictiveDialerConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccConnectcampaignsCampaign.DataAwsccConnectcampaignsCampaignDialerConfigPredictiveDialerConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectcampaignsCampaign.DataAwsccConnectcampaignsCampaignDialerConfigPredictiveDialerConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccConnectcampaignsCampaign.DataAwsccConnectcampaignsCampaignDialerConfigPredictiveDialerConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectcampaignsCampaign.DataAwsccConnectcampaignsCampaignDialerConfigPredictiveDialerConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccConnectcampaignsCampaign.DataAwsccConnectcampaignsCampaignDialerConfigPredictiveDialerConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectcampaignsCampaign.DataAwsccConnectcampaignsCampaignDialerConfigPredictiveDialerConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccConnectcampaignsCampaign.DataAwsccConnectcampaignsCampaignDialerConfigPredictiveDialerConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectcampaignsCampaign.DataAwsccConnectcampaignsCampaignDialerConfigPredictiveDialerConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccConnectcampaignsCampaign.DataAwsccConnectcampaignsCampaignDialerConfigPredictiveDialerConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectcampaignsCampaign.DataAwsccConnectcampaignsCampaignDialerConfigPredictiveDialerConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccConnectcampaignsCampaign.DataAwsccConnectcampaignsCampaignDialerConfigPredictiveDialerConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectcampaignsCampaign.DataAwsccConnectcampaignsCampaignDialerConfigPredictiveDialerConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccConnectcampaignsCampaign.DataAwsccConnectcampaignsCampaignDialerConfigPredictiveDialerConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccConnectcampaignsCampaign.DataAwsccConnectcampaignsCampaignDialerConfigPredictiveDialerConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccConnectcampaignsCampaign.DataAwsccConnectcampaignsCampaignDialerConfigPredictiveDialerConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccConnectcampaignsCampaign.DataAwsccConnectcampaignsCampaignDialerConfigPredictiveDialerConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccConnectcampaignsCampaign.DataAwsccConnectcampaignsCampaignDialerConfigPredictiveDialerConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectcampaignsCampaign.DataAwsccConnectcampaignsCampaignDialerConfigPredictiveDialerConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectcampaignsCampaign.DataAwsccConnectcampaignsCampaignDialerConfigPredictiveDialerConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectcampaignsCampaign.DataAwsccConnectcampaignsCampaignDialerConfigPredictiveDialerConfigOutputReference.property.bandwidthAllocation">bandwidthAllocation</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectcampaignsCampaign.DataAwsccConnectcampaignsCampaignDialerConfigPredictiveDialerConfigOutputReference.property.dialingCapacity">dialingCapacity</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectcampaignsCampaign.DataAwsccConnectcampaignsCampaignDialerConfigPredictiveDialerConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccConnectcampaignsCampaign.DataAwsccConnectcampaignsCampaignDialerConfigPredictiveDialerConfig">DataAwsccConnectcampaignsCampaignDialerConfigPredictiveDialerConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccConnectcampaignsCampaign.DataAwsccConnectcampaignsCampaignDialerConfigPredictiveDialerConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccConnectcampaignsCampaign.DataAwsccConnectcampaignsCampaignDialerConfigPredictiveDialerConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `bandwidthAllocation`<sup>Required</sup> <a name="bandwidthAllocation" id="@cdktn/provider-awscc.dataAwsccConnectcampaignsCampaign.DataAwsccConnectcampaignsCampaignDialerConfigPredictiveDialerConfigOutputReference.property.bandwidthAllocation"></a>

```typescript
public readonly bandwidthAllocation: number;
```

- *Type:* number

---

##### `dialingCapacity`<sup>Required</sup> <a name="dialingCapacity" id="@cdktn/provider-awscc.dataAwsccConnectcampaignsCampaign.DataAwsccConnectcampaignsCampaignDialerConfigPredictiveDialerConfigOutputReference.property.dialingCapacity"></a>

```typescript
public readonly dialingCapacity: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccConnectcampaignsCampaign.DataAwsccConnectcampaignsCampaignDialerConfigPredictiveDialerConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccConnectcampaignsCampaignDialerConfigPredictiveDialerConfig;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccConnectcampaignsCampaign.DataAwsccConnectcampaignsCampaignDialerConfigPredictiveDialerConfig">DataAwsccConnectcampaignsCampaignDialerConfigPredictiveDialerConfig</a>

---


### DataAwsccConnectcampaignsCampaignDialerConfigProgressiveDialerConfigOutputReference <a name="DataAwsccConnectcampaignsCampaignDialerConfigProgressiveDialerConfigOutputReference" id="@cdktn/provider-awscc.dataAwsccConnectcampaignsCampaign.DataAwsccConnectcampaignsCampaignDialerConfigProgressiveDialerConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccConnectcampaignsCampaign.DataAwsccConnectcampaignsCampaignDialerConfigProgressiveDialerConfigOutputReference.Initializer"></a>

```typescript
import { dataAwsccConnectcampaignsCampaign } from '@cdktn/provider-awscc'

new dataAwsccConnectcampaignsCampaign.DataAwsccConnectcampaignsCampaignDialerConfigProgressiveDialerConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectcampaignsCampaign.DataAwsccConnectcampaignsCampaignDialerConfigProgressiveDialerConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectcampaignsCampaign.DataAwsccConnectcampaignsCampaignDialerConfigProgressiveDialerConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccConnectcampaignsCampaign.DataAwsccConnectcampaignsCampaignDialerConfigProgressiveDialerConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectcampaignsCampaign.DataAwsccConnectcampaignsCampaignDialerConfigProgressiveDialerConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectcampaignsCampaign.DataAwsccConnectcampaignsCampaignDialerConfigProgressiveDialerConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectcampaignsCampaign.DataAwsccConnectcampaignsCampaignDialerConfigProgressiveDialerConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectcampaignsCampaign.DataAwsccConnectcampaignsCampaignDialerConfigProgressiveDialerConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectcampaignsCampaign.DataAwsccConnectcampaignsCampaignDialerConfigProgressiveDialerConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectcampaignsCampaign.DataAwsccConnectcampaignsCampaignDialerConfigProgressiveDialerConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectcampaignsCampaign.DataAwsccConnectcampaignsCampaignDialerConfigProgressiveDialerConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectcampaignsCampaign.DataAwsccConnectcampaignsCampaignDialerConfigProgressiveDialerConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectcampaignsCampaign.DataAwsccConnectcampaignsCampaignDialerConfigProgressiveDialerConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectcampaignsCampaign.DataAwsccConnectcampaignsCampaignDialerConfigProgressiveDialerConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectcampaignsCampaign.DataAwsccConnectcampaignsCampaignDialerConfigProgressiveDialerConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectcampaignsCampaign.DataAwsccConnectcampaignsCampaignDialerConfigProgressiveDialerConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectcampaignsCampaign.DataAwsccConnectcampaignsCampaignDialerConfigProgressiveDialerConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectcampaignsCampaign.DataAwsccConnectcampaignsCampaignDialerConfigProgressiveDialerConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccConnectcampaignsCampaign.DataAwsccConnectcampaignsCampaignDialerConfigProgressiveDialerConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccConnectcampaignsCampaign.DataAwsccConnectcampaignsCampaignDialerConfigProgressiveDialerConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectcampaignsCampaign.DataAwsccConnectcampaignsCampaignDialerConfigProgressiveDialerConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccConnectcampaignsCampaign.DataAwsccConnectcampaignsCampaignDialerConfigProgressiveDialerConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectcampaignsCampaign.DataAwsccConnectcampaignsCampaignDialerConfigProgressiveDialerConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccConnectcampaignsCampaign.DataAwsccConnectcampaignsCampaignDialerConfigProgressiveDialerConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectcampaignsCampaign.DataAwsccConnectcampaignsCampaignDialerConfigProgressiveDialerConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccConnectcampaignsCampaign.DataAwsccConnectcampaignsCampaignDialerConfigProgressiveDialerConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectcampaignsCampaign.DataAwsccConnectcampaignsCampaignDialerConfigProgressiveDialerConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccConnectcampaignsCampaign.DataAwsccConnectcampaignsCampaignDialerConfigProgressiveDialerConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectcampaignsCampaign.DataAwsccConnectcampaignsCampaignDialerConfigProgressiveDialerConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccConnectcampaignsCampaign.DataAwsccConnectcampaignsCampaignDialerConfigProgressiveDialerConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectcampaignsCampaign.DataAwsccConnectcampaignsCampaignDialerConfigProgressiveDialerConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccConnectcampaignsCampaign.DataAwsccConnectcampaignsCampaignDialerConfigProgressiveDialerConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectcampaignsCampaign.DataAwsccConnectcampaignsCampaignDialerConfigProgressiveDialerConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccConnectcampaignsCampaign.DataAwsccConnectcampaignsCampaignDialerConfigProgressiveDialerConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectcampaignsCampaign.DataAwsccConnectcampaignsCampaignDialerConfigProgressiveDialerConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccConnectcampaignsCampaign.DataAwsccConnectcampaignsCampaignDialerConfigProgressiveDialerConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectcampaignsCampaign.DataAwsccConnectcampaignsCampaignDialerConfigProgressiveDialerConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccConnectcampaignsCampaign.DataAwsccConnectcampaignsCampaignDialerConfigProgressiveDialerConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccConnectcampaignsCampaign.DataAwsccConnectcampaignsCampaignDialerConfigProgressiveDialerConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccConnectcampaignsCampaign.DataAwsccConnectcampaignsCampaignDialerConfigProgressiveDialerConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccConnectcampaignsCampaign.DataAwsccConnectcampaignsCampaignDialerConfigProgressiveDialerConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccConnectcampaignsCampaign.DataAwsccConnectcampaignsCampaignDialerConfigProgressiveDialerConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectcampaignsCampaign.DataAwsccConnectcampaignsCampaignDialerConfigProgressiveDialerConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectcampaignsCampaign.DataAwsccConnectcampaignsCampaignDialerConfigProgressiveDialerConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectcampaignsCampaign.DataAwsccConnectcampaignsCampaignDialerConfigProgressiveDialerConfigOutputReference.property.bandwidthAllocation">bandwidthAllocation</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectcampaignsCampaign.DataAwsccConnectcampaignsCampaignDialerConfigProgressiveDialerConfigOutputReference.property.dialingCapacity">dialingCapacity</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectcampaignsCampaign.DataAwsccConnectcampaignsCampaignDialerConfigProgressiveDialerConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccConnectcampaignsCampaign.DataAwsccConnectcampaignsCampaignDialerConfigProgressiveDialerConfig">DataAwsccConnectcampaignsCampaignDialerConfigProgressiveDialerConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccConnectcampaignsCampaign.DataAwsccConnectcampaignsCampaignDialerConfigProgressiveDialerConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccConnectcampaignsCampaign.DataAwsccConnectcampaignsCampaignDialerConfigProgressiveDialerConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `bandwidthAllocation`<sup>Required</sup> <a name="bandwidthAllocation" id="@cdktn/provider-awscc.dataAwsccConnectcampaignsCampaign.DataAwsccConnectcampaignsCampaignDialerConfigProgressiveDialerConfigOutputReference.property.bandwidthAllocation"></a>

```typescript
public readonly bandwidthAllocation: number;
```

- *Type:* number

---

##### `dialingCapacity`<sup>Required</sup> <a name="dialingCapacity" id="@cdktn/provider-awscc.dataAwsccConnectcampaignsCampaign.DataAwsccConnectcampaignsCampaignDialerConfigProgressiveDialerConfigOutputReference.property.dialingCapacity"></a>

```typescript
public readonly dialingCapacity: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccConnectcampaignsCampaign.DataAwsccConnectcampaignsCampaignDialerConfigProgressiveDialerConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccConnectcampaignsCampaignDialerConfigProgressiveDialerConfig;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccConnectcampaignsCampaign.DataAwsccConnectcampaignsCampaignDialerConfigProgressiveDialerConfig">DataAwsccConnectcampaignsCampaignDialerConfigProgressiveDialerConfig</a>

---


### DataAwsccConnectcampaignsCampaignOutboundCallConfigAnswerMachineDetectionConfigOutputReference <a name="DataAwsccConnectcampaignsCampaignOutboundCallConfigAnswerMachineDetectionConfigOutputReference" id="@cdktn/provider-awscc.dataAwsccConnectcampaignsCampaign.DataAwsccConnectcampaignsCampaignOutboundCallConfigAnswerMachineDetectionConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccConnectcampaignsCampaign.DataAwsccConnectcampaignsCampaignOutboundCallConfigAnswerMachineDetectionConfigOutputReference.Initializer"></a>

```typescript
import { dataAwsccConnectcampaignsCampaign } from '@cdktn/provider-awscc'

new dataAwsccConnectcampaignsCampaign.DataAwsccConnectcampaignsCampaignOutboundCallConfigAnswerMachineDetectionConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectcampaignsCampaign.DataAwsccConnectcampaignsCampaignOutboundCallConfigAnswerMachineDetectionConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectcampaignsCampaign.DataAwsccConnectcampaignsCampaignOutboundCallConfigAnswerMachineDetectionConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccConnectcampaignsCampaign.DataAwsccConnectcampaignsCampaignOutboundCallConfigAnswerMachineDetectionConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectcampaignsCampaign.DataAwsccConnectcampaignsCampaignOutboundCallConfigAnswerMachineDetectionConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectcampaignsCampaign.DataAwsccConnectcampaignsCampaignOutboundCallConfigAnswerMachineDetectionConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectcampaignsCampaign.DataAwsccConnectcampaignsCampaignOutboundCallConfigAnswerMachineDetectionConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectcampaignsCampaign.DataAwsccConnectcampaignsCampaignOutboundCallConfigAnswerMachineDetectionConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectcampaignsCampaign.DataAwsccConnectcampaignsCampaignOutboundCallConfigAnswerMachineDetectionConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectcampaignsCampaign.DataAwsccConnectcampaignsCampaignOutboundCallConfigAnswerMachineDetectionConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectcampaignsCampaign.DataAwsccConnectcampaignsCampaignOutboundCallConfigAnswerMachineDetectionConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectcampaignsCampaign.DataAwsccConnectcampaignsCampaignOutboundCallConfigAnswerMachineDetectionConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectcampaignsCampaign.DataAwsccConnectcampaignsCampaignOutboundCallConfigAnswerMachineDetectionConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectcampaignsCampaign.DataAwsccConnectcampaignsCampaignOutboundCallConfigAnswerMachineDetectionConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectcampaignsCampaign.DataAwsccConnectcampaignsCampaignOutboundCallConfigAnswerMachineDetectionConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectcampaignsCampaign.DataAwsccConnectcampaignsCampaignOutboundCallConfigAnswerMachineDetectionConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectcampaignsCampaign.DataAwsccConnectcampaignsCampaignOutboundCallConfigAnswerMachineDetectionConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectcampaignsCampaign.DataAwsccConnectcampaignsCampaignOutboundCallConfigAnswerMachineDetectionConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccConnectcampaignsCampaign.DataAwsccConnectcampaignsCampaignOutboundCallConfigAnswerMachineDetectionConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccConnectcampaignsCampaign.DataAwsccConnectcampaignsCampaignOutboundCallConfigAnswerMachineDetectionConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectcampaignsCampaign.DataAwsccConnectcampaignsCampaignOutboundCallConfigAnswerMachineDetectionConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccConnectcampaignsCampaign.DataAwsccConnectcampaignsCampaignOutboundCallConfigAnswerMachineDetectionConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectcampaignsCampaign.DataAwsccConnectcampaignsCampaignOutboundCallConfigAnswerMachineDetectionConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccConnectcampaignsCampaign.DataAwsccConnectcampaignsCampaignOutboundCallConfigAnswerMachineDetectionConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectcampaignsCampaign.DataAwsccConnectcampaignsCampaignOutboundCallConfigAnswerMachineDetectionConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccConnectcampaignsCampaign.DataAwsccConnectcampaignsCampaignOutboundCallConfigAnswerMachineDetectionConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectcampaignsCampaign.DataAwsccConnectcampaignsCampaignOutboundCallConfigAnswerMachineDetectionConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccConnectcampaignsCampaign.DataAwsccConnectcampaignsCampaignOutboundCallConfigAnswerMachineDetectionConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectcampaignsCampaign.DataAwsccConnectcampaignsCampaignOutboundCallConfigAnswerMachineDetectionConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccConnectcampaignsCampaign.DataAwsccConnectcampaignsCampaignOutboundCallConfigAnswerMachineDetectionConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectcampaignsCampaign.DataAwsccConnectcampaignsCampaignOutboundCallConfigAnswerMachineDetectionConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccConnectcampaignsCampaign.DataAwsccConnectcampaignsCampaignOutboundCallConfigAnswerMachineDetectionConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectcampaignsCampaign.DataAwsccConnectcampaignsCampaignOutboundCallConfigAnswerMachineDetectionConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccConnectcampaignsCampaign.DataAwsccConnectcampaignsCampaignOutboundCallConfigAnswerMachineDetectionConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectcampaignsCampaign.DataAwsccConnectcampaignsCampaignOutboundCallConfigAnswerMachineDetectionConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccConnectcampaignsCampaign.DataAwsccConnectcampaignsCampaignOutboundCallConfigAnswerMachineDetectionConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectcampaignsCampaign.DataAwsccConnectcampaignsCampaignOutboundCallConfigAnswerMachineDetectionConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccConnectcampaignsCampaign.DataAwsccConnectcampaignsCampaignOutboundCallConfigAnswerMachineDetectionConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccConnectcampaignsCampaign.DataAwsccConnectcampaignsCampaignOutboundCallConfigAnswerMachineDetectionConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccConnectcampaignsCampaign.DataAwsccConnectcampaignsCampaignOutboundCallConfigAnswerMachineDetectionConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccConnectcampaignsCampaign.DataAwsccConnectcampaignsCampaignOutboundCallConfigAnswerMachineDetectionConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccConnectcampaignsCampaign.DataAwsccConnectcampaignsCampaignOutboundCallConfigAnswerMachineDetectionConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectcampaignsCampaign.DataAwsccConnectcampaignsCampaignOutboundCallConfigAnswerMachineDetectionConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectcampaignsCampaign.DataAwsccConnectcampaignsCampaignOutboundCallConfigAnswerMachineDetectionConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectcampaignsCampaign.DataAwsccConnectcampaignsCampaignOutboundCallConfigAnswerMachineDetectionConfigOutputReference.property.awaitAnswerMachinePrompt">awaitAnswerMachinePrompt</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectcampaignsCampaign.DataAwsccConnectcampaignsCampaignOutboundCallConfigAnswerMachineDetectionConfigOutputReference.property.enableAnswerMachineDetection">enableAnswerMachineDetection</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectcampaignsCampaign.DataAwsccConnectcampaignsCampaignOutboundCallConfigAnswerMachineDetectionConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccConnectcampaignsCampaign.DataAwsccConnectcampaignsCampaignOutboundCallConfigAnswerMachineDetectionConfig">DataAwsccConnectcampaignsCampaignOutboundCallConfigAnswerMachineDetectionConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccConnectcampaignsCampaign.DataAwsccConnectcampaignsCampaignOutboundCallConfigAnswerMachineDetectionConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccConnectcampaignsCampaign.DataAwsccConnectcampaignsCampaignOutboundCallConfigAnswerMachineDetectionConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `awaitAnswerMachinePrompt`<sup>Required</sup> <a name="awaitAnswerMachinePrompt" id="@cdktn/provider-awscc.dataAwsccConnectcampaignsCampaign.DataAwsccConnectcampaignsCampaignOutboundCallConfigAnswerMachineDetectionConfigOutputReference.property.awaitAnswerMachinePrompt"></a>

```typescript
public readonly awaitAnswerMachinePrompt: IResolvable;
```

- *Type:* cdktn.IResolvable

---

##### `enableAnswerMachineDetection`<sup>Required</sup> <a name="enableAnswerMachineDetection" id="@cdktn/provider-awscc.dataAwsccConnectcampaignsCampaign.DataAwsccConnectcampaignsCampaignOutboundCallConfigAnswerMachineDetectionConfigOutputReference.property.enableAnswerMachineDetection"></a>

```typescript
public readonly enableAnswerMachineDetection: IResolvable;
```

- *Type:* cdktn.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccConnectcampaignsCampaign.DataAwsccConnectcampaignsCampaignOutboundCallConfigAnswerMachineDetectionConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccConnectcampaignsCampaignOutboundCallConfigAnswerMachineDetectionConfig;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccConnectcampaignsCampaign.DataAwsccConnectcampaignsCampaignOutboundCallConfigAnswerMachineDetectionConfig">DataAwsccConnectcampaignsCampaignOutboundCallConfigAnswerMachineDetectionConfig</a>

---


### DataAwsccConnectcampaignsCampaignOutboundCallConfigOutputReference <a name="DataAwsccConnectcampaignsCampaignOutboundCallConfigOutputReference" id="@cdktn/provider-awscc.dataAwsccConnectcampaignsCampaign.DataAwsccConnectcampaignsCampaignOutboundCallConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccConnectcampaignsCampaign.DataAwsccConnectcampaignsCampaignOutboundCallConfigOutputReference.Initializer"></a>

```typescript
import { dataAwsccConnectcampaignsCampaign } from '@cdktn/provider-awscc'

new dataAwsccConnectcampaignsCampaign.DataAwsccConnectcampaignsCampaignOutboundCallConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectcampaignsCampaign.DataAwsccConnectcampaignsCampaignOutboundCallConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectcampaignsCampaign.DataAwsccConnectcampaignsCampaignOutboundCallConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccConnectcampaignsCampaign.DataAwsccConnectcampaignsCampaignOutboundCallConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectcampaignsCampaign.DataAwsccConnectcampaignsCampaignOutboundCallConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectcampaignsCampaign.DataAwsccConnectcampaignsCampaignOutboundCallConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectcampaignsCampaign.DataAwsccConnectcampaignsCampaignOutboundCallConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectcampaignsCampaign.DataAwsccConnectcampaignsCampaignOutboundCallConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectcampaignsCampaign.DataAwsccConnectcampaignsCampaignOutboundCallConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectcampaignsCampaign.DataAwsccConnectcampaignsCampaignOutboundCallConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectcampaignsCampaign.DataAwsccConnectcampaignsCampaignOutboundCallConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectcampaignsCampaign.DataAwsccConnectcampaignsCampaignOutboundCallConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectcampaignsCampaign.DataAwsccConnectcampaignsCampaignOutboundCallConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectcampaignsCampaign.DataAwsccConnectcampaignsCampaignOutboundCallConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectcampaignsCampaign.DataAwsccConnectcampaignsCampaignOutboundCallConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectcampaignsCampaign.DataAwsccConnectcampaignsCampaignOutboundCallConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectcampaignsCampaign.DataAwsccConnectcampaignsCampaignOutboundCallConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectcampaignsCampaign.DataAwsccConnectcampaignsCampaignOutboundCallConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccConnectcampaignsCampaign.DataAwsccConnectcampaignsCampaignOutboundCallConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccConnectcampaignsCampaign.DataAwsccConnectcampaignsCampaignOutboundCallConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectcampaignsCampaign.DataAwsccConnectcampaignsCampaignOutboundCallConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccConnectcampaignsCampaign.DataAwsccConnectcampaignsCampaignOutboundCallConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectcampaignsCampaign.DataAwsccConnectcampaignsCampaignOutboundCallConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccConnectcampaignsCampaign.DataAwsccConnectcampaignsCampaignOutboundCallConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectcampaignsCampaign.DataAwsccConnectcampaignsCampaignOutboundCallConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccConnectcampaignsCampaign.DataAwsccConnectcampaignsCampaignOutboundCallConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectcampaignsCampaign.DataAwsccConnectcampaignsCampaignOutboundCallConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccConnectcampaignsCampaign.DataAwsccConnectcampaignsCampaignOutboundCallConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectcampaignsCampaign.DataAwsccConnectcampaignsCampaignOutboundCallConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccConnectcampaignsCampaign.DataAwsccConnectcampaignsCampaignOutboundCallConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectcampaignsCampaign.DataAwsccConnectcampaignsCampaignOutboundCallConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccConnectcampaignsCampaign.DataAwsccConnectcampaignsCampaignOutboundCallConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectcampaignsCampaign.DataAwsccConnectcampaignsCampaignOutboundCallConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccConnectcampaignsCampaign.DataAwsccConnectcampaignsCampaignOutboundCallConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectcampaignsCampaign.DataAwsccConnectcampaignsCampaignOutboundCallConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccConnectcampaignsCampaign.DataAwsccConnectcampaignsCampaignOutboundCallConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectcampaignsCampaign.DataAwsccConnectcampaignsCampaignOutboundCallConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccConnectcampaignsCampaign.DataAwsccConnectcampaignsCampaignOutboundCallConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccConnectcampaignsCampaign.DataAwsccConnectcampaignsCampaignOutboundCallConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccConnectcampaignsCampaign.DataAwsccConnectcampaignsCampaignOutboundCallConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccConnectcampaignsCampaign.DataAwsccConnectcampaignsCampaignOutboundCallConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccConnectcampaignsCampaign.DataAwsccConnectcampaignsCampaignOutboundCallConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectcampaignsCampaign.DataAwsccConnectcampaignsCampaignOutboundCallConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectcampaignsCampaign.DataAwsccConnectcampaignsCampaignOutboundCallConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectcampaignsCampaign.DataAwsccConnectcampaignsCampaignOutboundCallConfigOutputReference.property.answerMachineDetectionConfig">answerMachineDetectionConfig</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccConnectcampaignsCampaign.DataAwsccConnectcampaignsCampaignOutboundCallConfigAnswerMachineDetectionConfigOutputReference">DataAwsccConnectcampaignsCampaignOutboundCallConfigAnswerMachineDetectionConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectcampaignsCampaign.DataAwsccConnectcampaignsCampaignOutboundCallConfigOutputReference.property.connectContactFlowArn">connectContactFlowArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectcampaignsCampaign.DataAwsccConnectcampaignsCampaignOutboundCallConfigOutputReference.property.connectQueueArn">connectQueueArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectcampaignsCampaign.DataAwsccConnectcampaignsCampaignOutboundCallConfigOutputReference.property.connectSourcePhoneNumber">connectSourcePhoneNumber</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectcampaignsCampaign.DataAwsccConnectcampaignsCampaignOutboundCallConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccConnectcampaignsCampaign.DataAwsccConnectcampaignsCampaignOutboundCallConfig">DataAwsccConnectcampaignsCampaignOutboundCallConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccConnectcampaignsCampaign.DataAwsccConnectcampaignsCampaignOutboundCallConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccConnectcampaignsCampaign.DataAwsccConnectcampaignsCampaignOutboundCallConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `answerMachineDetectionConfig`<sup>Required</sup> <a name="answerMachineDetectionConfig" id="@cdktn/provider-awscc.dataAwsccConnectcampaignsCampaign.DataAwsccConnectcampaignsCampaignOutboundCallConfigOutputReference.property.answerMachineDetectionConfig"></a>

```typescript
public readonly answerMachineDetectionConfig: DataAwsccConnectcampaignsCampaignOutboundCallConfigAnswerMachineDetectionConfigOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccConnectcampaignsCampaign.DataAwsccConnectcampaignsCampaignOutboundCallConfigAnswerMachineDetectionConfigOutputReference">DataAwsccConnectcampaignsCampaignOutboundCallConfigAnswerMachineDetectionConfigOutputReference</a>

---

##### `connectContactFlowArn`<sup>Required</sup> <a name="connectContactFlowArn" id="@cdktn/provider-awscc.dataAwsccConnectcampaignsCampaign.DataAwsccConnectcampaignsCampaignOutboundCallConfigOutputReference.property.connectContactFlowArn"></a>

```typescript
public readonly connectContactFlowArn: string;
```

- *Type:* string

---

##### `connectQueueArn`<sup>Required</sup> <a name="connectQueueArn" id="@cdktn/provider-awscc.dataAwsccConnectcampaignsCampaign.DataAwsccConnectcampaignsCampaignOutboundCallConfigOutputReference.property.connectQueueArn"></a>

```typescript
public readonly connectQueueArn: string;
```

- *Type:* string

---

##### `connectSourcePhoneNumber`<sup>Required</sup> <a name="connectSourcePhoneNumber" id="@cdktn/provider-awscc.dataAwsccConnectcampaignsCampaign.DataAwsccConnectcampaignsCampaignOutboundCallConfigOutputReference.property.connectSourcePhoneNumber"></a>

```typescript
public readonly connectSourcePhoneNumber: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccConnectcampaignsCampaign.DataAwsccConnectcampaignsCampaignOutboundCallConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccConnectcampaignsCampaignOutboundCallConfig;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccConnectcampaignsCampaign.DataAwsccConnectcampaignsCampaignOutboundCallConfig">DataAwsccConnectcampaignsCampaignOutboundCallConfig</a>

---


### DataAwsccConnectcampaignsCampaignTagsList <a name="DataAwsccConnectcampaignsCampaignTagsList" id="@cdktn/provider-awscc.dataAwsccConnectcampaignsCampaign.DataAwsccConnectcampaignsCampaignTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccConnectcampaignsCampaign.DataAwsccConnectcampaignsCampaignTagsList.Initializer"></a>

```typescript
import { dataAwsccConnectcampaignsCampaign } from '@cdktn/provider-awscc'

new dataAwsccConnectcampaignsCampaign.DataAwsccConnectcampaignsCampaignTagsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectcampaignsCampaign.DataAwsccConnectcampaignsCampaignTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectcampaignsCampaign.DataAwsccConnectcampaignsCampaignTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectcampaignsCampaign.DataAwsccConnectcampaignsCampaignTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccConnectcampaignsCampaign.DataAwsccConnectcampaignsCampaignTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectcampaignsCampaign.DataAwsccConnectcampaignsCampaignTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccConnectcampaignsCampaign.DataAwsccConnectcampaignsCampaignTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectcampaignsCampaign.DataAwsccConnectcampaignsCampaignTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectcampaignsCampaign.DataAwsccConnectcampaignsCampaignTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectcampaignsCampaign.DataAwsccConnectcampaignsCampaignTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectcampaignsCampaign.DataAwsccConnectcampaignsCampaignTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectcampaignsCampaign.DataAwsccConnectcampaignsCampaignTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.dataAwsccConnectcampaignsCampaign.DataAwsccConnectcampaignsCampaignTagsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccConnectcampaignsCampaign.DataAwsccConnectcampaignsCampaignTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccConnectcampaignsCampaign.DataAwsccConnectcampaignsCampaignTagsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccConnectcampaignsCampaign.DataAwsccConnectcampaignsCampaignTagsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccConnectcampaignsCampaign.DataAwsccConnectcampaignsCampaignTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccConnectcampaignsCampaign.DataAwsccConnectcampaignsCampaignTagsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccConnectcampaignsCampaign.DataAwsccConnectcampaignsCampaignTagsList.get"></a>

```typescript
public get(index: number): DataAwsccConnectcampaignsCampaignTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccConnectcampaignsCampaign.DataAwsccConnectcampaignsCampaignTagsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectcampaignsCampaign.DataAwsccConnectcampaignsCampaignTagsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectcampaignsCampaign.DataAwsccConnectcampaignsCampaignTagsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccConnectcampaignsCampaign.DataAwsccConnectcampaignsCampaignTagsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccConnectcampaignsCampaign.DataAwsccConnectcampaignsCampaignTagsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAwsccConnectcampaignsCampaignTagsOutputReference <a name="DataAwsccConnectcampaignsCampaignTagsOutputReference" id="@cdktn/provider-awscc.dataAwsccConnectcampaignsCampaign.DataAwsccConnectcampaignsCampaignTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccConnectcampaignsCampaign.DataAwsccConnectcampaignsCampaignTagsOutputReference.Initializer"></a>

```typescript
import { dataAwsccConnectcampaignsCampaign } from '@cdktn/provider-awscc'

new dataAwsccConnectcampaignsCampaign.DataAwsccConnectcampaignsCampaignTagsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectcampaignsCampaign.DataAwsccConnectcampaignsCampaignTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectcampaignsCampaign.DataAwsccConnectcampaignsCampaignTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectcampaignsCampaign.DataAwsccConnectcampaignsCampaignTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectcampaignsCampaign.DataAwsccConnectcampaignsCampaignTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccConnectcampaignsCampaign.DataAwsccConnectcampaignsCampaignTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectcampaignsCampaign.DataAwsccConnectcampaignsCampaignTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccConnectcampaignsCampaign.DataAwsccConnectcampaignsCampaignTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccConnectcampaignsCampaign.DataAwsccConnectcampaignsCampaignTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectcampaignsCampaign.DataAwsccConnectcampaignsCampaignTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectcampaignsCampaign.DataAwsccConnectcampaignsCampaignTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectcampaignsCampaign.DataAwsccConnectcampaignsCampaignTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectcampaignsCampaign.DataAwsccConnectcampaignsCampaignTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectcampaignsCampaign.DataAwsccConnectcampaignsCampaignTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectcampaignsCampaign.DataAwsccConnectcampaignsCampaignTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectcampaignsCampaign.DataAwsccConnectcampaignsCampaignTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectcampaignsCampaign.DataAwsccConnectcampaignsCampaignTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectcampaignsCampaign.DataAwsccConnectcampaignsCampaignTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectcampaignsCampaign.DataAwsccConnectcampaignsCampaignTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectcampaignsCampaign.DataAwsccConnectcampaignsCampaignTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectcampaignsCampaign.DataAwsccConnectcampaignsCampaignTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectcampaignsCampaign.DataAwsccConnectcampaignsCampaignTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccConnectcampaignsCampaign.DataAwsccConnectcampaignsCampaignTagsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccConnectcampaignsCampaign.DataAwsccConnectcampaignsCampaignTagsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectcampaignsCampaign.DataAwsccConnectcampaignsCampaignTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccConnectcampaignsCampaign.DataAwsccConnectcampaignsCampaignTagsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectcampaignsCampaign.DataAwsccConnectcampaignsCampaignTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccConnectcampaignsCampaign.DataAwsccConnectcampaignsCampaignTagsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectcampaignsCampaign.DataAwsccConnectcampaignsCampaignTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccConnectcampaignsCampaign.DataAwsccConnectcampaignsCampaignTagsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectcampaignsCampaign.DataAwsccConnectcampaignsCampaignTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccConnectcampaignsCampaign.DataAwsccConnectcampaignsCampaignTagsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectcampaignsCampaign.DataAwsccConnectcampaignsCampaignTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccConnectcampaignsCampaign.DataAwsccConnectcampaignsCampaignTagsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectcampaignsCampaign.DataAwsccConnectcampaignsCampaignTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccConnectcampaignsCampaign.DataAwsccConnectcampaignsCampaignTagsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectcampaignsCampaign.DataAwsccConnectcampaignsCampaignTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccConnectcampaignsCampaign.DataAwsccConnectcampaignsCampaignTagsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectcampaignsCampaign.DataAwsccConnectcampaignsCampaignTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccConnectcampaignsCampaign.DataAwsccConnectcampaignsCampaignTagsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectcampaignsCampaign.DataAwsccConnectcampaignsCampaignTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccConnectcampaignsCampaign.DataAwsccConnectcampaignsCampaignTagsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccConnectcampaignsCampaign.DataAwsccConnectcampaignsCampaignTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccConnectcampaignsCampaign.DataAwsccConnectcampaignsCampaignTagsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccConnectcampaignsCampaign.DataAwsccConnectcampaignsCampaignTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccConnectcampaignsCampaign.DataAwsccConnectcampaignsCampaignTagsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectcampaignsCampaign.DataAwsccConnectcampaignsCampaignTagsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectcampaignsCampaign.DataAwsccConnectcampaignsCampaignTagsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectcampaignsCampaign.DataAwsccConnectcampaignsCampaignTagsOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectcampaignsCampaign.DataAwsccConnectcampaignsCampaignTagsOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectcampaignsCampaign.DataAwsccConnectcampaignsCampaignTagsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccConnectcampaignsCampaign.DataAwsccConnectcampaignsCampaignTags">DataAwsccConnectcampaignsCampaignTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccConnectcampaignsCampaign.DataAwsccConnectcampaignsCampaignTagsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccConnectcampaignsCampaign.DataAwsccConnectcampaignsCampaignTagsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.dataAwsccConnectcampaignsCampaign.DataAwsccConnectcampaignsCampaignTagsOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccConnectcampaignsCampaign.DataAwsccConnectcampaignsCampaignTagsOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccConnectcampaignsCampaign.DataAwsccConnectcampaignsCampaignTagsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccConnectcampaignsCampaignTags;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccConnectcampaignsCampaign.DataAwsccConnectcampaignsCampaignTags">DataAwsccConnectcampaignsCampaignTags</a>

---



