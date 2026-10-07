# `dataAwsccPersonalizeCampaign` Submodule <a name="`dataAwsccPersonalizeCampaign` Submodule" id="@cdktn/provider-awscc.dataAwsccPersonalizeCampaign"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsccPersonalizeCampaign <a name="DataAwsccPersonalizeCampaign" id="@cdktn/provider-awscc.dataAwsccPersonalizeCampaign.DataAwsccPersonalizeCampaign"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/data-sources/personalize_campaign awscc_personalize_campaign}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccPersonalizeCampaign.DataAwsccPersonalizeCampaign.Initializer"></a>

```typescript
import { dataAwsccPersonalizeCampaign } from '@cdktn/provider-awscc'

new dataAwsccPersonalizeCampaign.DataAwsccPersonalizeCampaign(scope: Construct, id: string, config: DataAwsccPersonalizeCampaignConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPersonalizeCampaign.DataAwsccPersonalizeCampaign.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPersonalizeCampaign.DataAwsccPersonalizeCampaign.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPersonalizeCampaign.DataAwsccPersonalizeCampaign.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccPersonalizeCampaign.DataAwsccPersonalizeCampaignConfig">DataAwsccPersonalizeCampaignConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccPersonalizeCampaign.DataAwsccPersonalizeCampaign.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccPersonalizeCampaign.DataAwsccPersonalizeCampaign.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.dataAwsccPersonalizeCampaign.DataAwsccPersonalizeCampaign.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccPersonalizeCampaign.DataAwsccPersonalizeCampaignConfig">DataAwsccPersonalizeCampaignConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPersonalizeCampaign.DataAwsccPersonalizeCampaign.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPersonalizeCampaign.DataAwsccPersonalizeCampaign.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPersonalizeCampaign.DataAwsccPersonalizeCampaign.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPersonalizeCampaign.DataAwsccPersonalizeCampaign.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPersonalizeCampaign.DataAwsccPersonalizeCampaign.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPersonalizeCampaign.DataAwsccPersonalizeCampaign.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPersonalizeCampaign.DataAwsccPersonalizeCampaign.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPersonalizeCampaign.DataAwsccPersonalizeCampaign.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPersonalizeCampaign.DataAwsccPersonalizeCampaign.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPersonalizeCampaign.DataAwsccPersonalizeCampaign.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPersonalizeCampaign.DataAwsccPersonalizeCampaign.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPersonalizeCampaign.DataAwsccPersonalizeCampaign.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPersonalizeCampaign.DataAwsccPersonalizeCampaign.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPersonalizeCampaign.DataAwsccPersonalizeCampaign.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPersonalizeCampaign.DataAwsccPersonalizeCampaign.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPersonalizeCampaign.DataAwsccPersonalizeCampaign.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPersonalizeCampaign.DataAwsccPersonalizeCampaign.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPersonalizeCampaign.DataAwsccPersonalizeCampaign.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccPersonalizeCampaign.DataAwsccPersonalizeCampaign.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.dataAwsccPersonalizeCampaign.DataAwsccPersonalizeCampaign.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.dataAwsccPersonalizeCampaign.DataAwsccPersonalizeCampaign.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.dataAwsccPersonalizeCampaign.DataAwsccPersonalizeCampaign.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.dataAwsccPersonalizeCampaign.DataAwsccPersonalizeCampaign.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccPersonalizeCampaign.DataAwsccPersonalizeCampaign.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.dataAwsccPersonalizeCampaign.DataAwsccPersonalizeCampaign.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.dataAwsccPersonalizeCampaign.DataAwsccPersonalizeCampaign.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccPersonalizeCampaign.DataAwsccPersonalizeCampaign.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.dataAwsccPersonalizeCampaign.DataAwsccPersonalizeCampaign.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.dataAwsccPersonalizeCampaign.DataAwsccPersonalizeCampaign.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.dataAwsccPersonalizeCampaign.DataAwsccPersonalizeCampaign.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccPersonalizeCampaign.DataAwsccPersonalizeCampaign.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPersonalizeCampaign.DataAwsccPersonalizeCampaign.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccPersonalizeCampaign.DataAwsccPersonalizeCampaign.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPersonalizeCampaign.DataAwsccPersonalizeCampaign.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccPersonalizeCampaign.DataAwsccPersonalizeCampaign.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPersonalizeCampaign.DataAwsccPersonalizeCampaign.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccPersonalizeCampaign.DataAwsccPersonalizeCampaign.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPersonalizeCampaign.DataAwsccPersonalizeCampaign.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccPersonalizeCampaign.DataAwsccPersonalizeCampaign.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPersonalizeCampaign.DataAwsccPersonalizeCampaign.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccPersonalizeCampaign.DataAwsccPersonalizeCampaign.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPersonalizeCampaign.DataAwsccPersonalizeCampaign.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccPersonalizeCampaign.DataAwsccPersonalizeCampaign.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPersonalizeCampaign.DataAwsccPersonalizeCampaign.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccPersonalizeCampaign.DataAwsccPersonalizeCampaign.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPersonalizeCampaign.DataAwsccPersonalizeCampaign.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccPersonalizeCampaign.DataAwsccPersonalizeCampaign.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPersonalizeCampaign.DataAwsccPersonalizeCampaign.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccPersonalizeCampaign.DataAwsccPersonalizeCampaign.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPersonalizeCampaign.DataAwsccPersonalizeCampaign.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPersonalizeCampaign.DataAwsccPersonalizeCampaign.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPersonalizeCampaign.DataAwsccPersonalizeCampaign.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPersonalizeCampaign.DataAwsccPersonalizeCampaign.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPersonalizeCampaign.DataAwsccPersonalizeCampaign.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a DataAwsccPersonalizeCampaign resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.dataAwsccPersonalizeCampaign.DataAwsccPersonalizeCampaign.isConstruct"></a>

```typescript
import { dataAwsccPersonalizeCampaign } from '@cdktn/provider-awscc'

dataAwsccPersonalizeCampaign.DataAwsccPersonalizeCampaign.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccPersonalizeCampaign.DataAwsccPersonalizeCampaign.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.dataAwsccPersonalizeCampaign.DataAwsccPersonalizeCampaign.isTerraformElement"></a>

```typescript
import { dataAwsccPersonalizeCampaign } from '@cdktn/provider-awscc'

dataAwsccPersonalizeCampaign.DataAwsccPersonalizeCampaign.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccPersonalizeCampaign.DataAwsccPersonalizeCampaign.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktn/provider-awscc.dataAwsccPersonalizeCampaign.DataAwsccPersonalizeCampaign.isTerraformDataSource"></a>

```typescript
import { dataAwsccPersonalizeCampaign } from '@cdktn/provider-awscc'

dataAwsccPersonalizeCampaign.DataAwsccPersonalizeCampaign.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccPersonalizeCampaign.DataAwsccPersonalizeCampaign.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.dataAwsccPersonalizeCampaign.DataAwsccPersonalizeCampaign.generateConfigForImport"></a>

```typescript
import { dataAwsccPersonalizeCampaign } from '@cdktn/provider-awscc'

dataAwsccPersonalizeCampaign.DataAwsccPersonalizeCampaign.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a DataAwsccPersonalizeCampaign resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccPersonalizeCampaign.DataAwsccPersonalizeCampaign.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.dataAwsccPersonalizeCampaign.DataAwsccPersonalizeCampaign.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataAwsccPersonalizeCampaign to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.dataAwsccPersonalizeCampaign.DataAwsccPersonalizeCampaign.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataAwsccPersonalizeCampaign that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/data-sources/personalize_campaign#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccPersonalizeCampaign.DataAwsccPersonalizeCampaign.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsccPersonalizeCampaign to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPersonalizeCampaign.DataAwsccPersonalizeCampaign.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPersonalizeCampaign.DataAwsccPersonalizeCampaign.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPersonalizeCampaign.DataAwsccPersonalizeCampaign.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPersonalizeCampaign.DataAwsccPersonalizeCampaign.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPersonalizeCampaign.DataAwsccPersonalizeCampaign.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPersonalizeCampaign.DataAwsccPersonalizeCampaign.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPersonalizeCampaign.DataAwsccPersonalizeCampaign.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPersonalizeCampaign.DataAwsccPersonalizeCampaign.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPersonalizeCampaign.DataAwsccPersonalizeCampaign.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPersonalizeCampaign.DataAwsccPersonalizeCampaign.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPersonalizeCampaign.DataAwsccPersonalizeCampaign.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPersonalizeCampaign.DataAwsccPersonalizeCampaign.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPersonalizeCampaign.DataAwsccPersonalizeCampaign.property.campaignArn">campaignArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPersonalizeCampaign.DataAwsccPersonalizeCampaign.property.campaignConfig">campaignConfig</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccPersonalizeCampaign.DataAwsccPersonalizeCampaignCampaignConfigOutputReference">DataAwsccPersonalizeCampaignCampaignConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPersonalizeCampaign.DataAwsccPersonalizeCampaign.property.creationDateTime">creationDateTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPersonalizeCampaign.DataAwsccPersonalizeCampaign.property.lastUpdatedDateTime">lastUpdatedDateTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPersonalizeCampaign.DataAwsccPersonalizeCampaign.property.minProvisionedTps">minProvisionedTps</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPersonalizeCampaign.DataAwsccPersonalizeCampaign.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPersonalizeCampaign.DataAwsccPersonalizeCampaign.property.solutionVersionArn">solutionVersionArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPersonalizeCampaign.DataAwsccPersonalizeCampaign.property.status">status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPersonalizeCampaign.DataAwsccPersonalizeCampaign.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccPersonalizeCampaign.DataAwsccPersonalizeCampaignTagsList">DataAwsccPersonalizeCampaignTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPersonalizeCampaign.DataAwsccPersonalizeCampaign.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPersonalizeCampaign.DataAwsccPersonalizeCampaign.property.id">id</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.dataAwsccPersonalizeCampaign.DataAwsccPersonalizeCampaign.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.dataAwsccPersonalizeCampaign.DataAwsccPersonalizeCampaign.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccPersonalizeCampaign.DataAwsccPersonalizeCampaign.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.dataAwsccPersonalizeCampaign.DataAwsccPersonalizeCampaign.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.dataAwsccPersonalizeCampaign.DataAwsccPersonalizeCampaign.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.dataAwsccPersonalizeCampaign.DataAwsccPersonalizeCampaign.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.dataAwsccPersonalizeCampaign.DataAwsccPersonalizeCampaign.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccPersonalizeCampaign.DataAwsccPersonalizeCampaign.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.dataAwsccPersonalizeCampaign.DataAwsccPersonalizeCampaign.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.dataAwsccPersonalizeCampaign.DataAwsccPersonalizeCampaign.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccPersonalizeCampaign.DataAwsccPersonalizeCampaign.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccPersonalizeCampaign.DataAwsccPersonalizeCampaign.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `campaignArn`<sup>Required</sup> <a name="campaignArn" id="@cdktn/provider-awscc.dataAwsccPersonalizeCampaign.DataAwsccPersonalizeCampaign.property.campaignArn"></a>

```typescript
public readonly campaignArn: string;
```

- *Type:* string

---

##### `campaignConfig`<sup>Required</sup> <a name="campaignConfig" id="@cdktn/provider-awscc.dataAwsccPersonalizeCampaign.DataAwsccPersonalizeCampaign.property.campaignConfig"></a>

```typescript
public readonly campaignConfig: DataAwsccPersonalizeCampaignCampaignConfigOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccPersonalizeCampaign.DataAwsccPersonalizeCampaignCampaignConfigOutputReference">DataAwsccPersonalizeCampaignCampaignConfigOutputReference</a>

---

##### `creationDateTime`<sup>Required</sup> <a name="creationDateTime" id="@cdktn/provider-awscc.dataAwsccPersonalizeCampaign.DataAwsccPersonalizeCampaign.property.creationDateTime"></a>

```typescript
public readonly creationDateTime: string;
```

- *Type:* string

---

##### `lastUpdatedDateTime`<sup>Required</sup> <a name="lastUpdatedDateTime" id="@cdktn/provider-awscc.dataAwsccPersonalizeCampaign.DataAwsccPersonalizeCampaign.property.lastUpdatedDateTime"></a>

```typescript
public readonly lastUpdatedDateTime: string;
```

- *Type:* string

---

##### `minProvisionedTps`<sup>Required</sup> <a name="minProvisionedTps" id="@cdktn/provider-awscc.dataAwsccPersonalizeCampaign.DataAwsccPersonalizeCampaign.property.minProvisionedTps"></a>

```typescript
public readonly minProvisionedTps: number;
```

- *Type:* number

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.dataAwsccPersonalizeCampaign.DataAwsccPersonalizeCampaign.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `solutionVersionArn`<sup>Required</sup> <a name="solutionVersionArn" id="@cdktn/provider-awscc.dataAwsccPersonalizeCampaign.DataAwsccPersonalizeCampaign.property.solutionVersionArn"></a>

```typescript
public readonly solutionVersionArn: string;
```

- *Type:* string

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktn/provider-awscc.dataAwsccPersonalizeCampaign.DataAwsccPersonalizeCampaign.property.status"></a>

```typescript
public readonly status: string;
```

- *Type:* string

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.dataAwsccPersonalizeCampaign.DataAwsccPersonalizeCampaign.property.tags"></a>

```typescript
public readonly tags: DataAwsccPersonalizeCampaignTagsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccPersonalizeCampaign.DataAwsccPersonalizeCampaignTagsList">DataAwsccPersonalizeCampaignTagsList</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-awscc.dataAwsccPersonalizeCampaign.DataAwsccPersonalizeCampaign.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccPersonalizeCampaign.DataAwsccPersonalizeCampaign.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPersonalizeCampaign.DataAwsccPersonalizeCampaign.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.dataAwsccPersonalizeCampaign.DataAwsccPersonalizeCampaign.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsccPersonalizeCampaignCampaignConfig <a name="DataAwsccPersonalizeCampaignCampaignConfig" id="@cdktn/provider-awscc.dataAwsccPersonalizeCampaign.DataAwsccPersonalizeCampaignCampaignConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccPersonalizeCampaign.DataAwsccPersonalizeCampaignCampaignConfig.Initializer"></a>

```typescript
import { dataAwsccPersonalizeCampaign } from '@cdktn/provider-awscc'

const dataAwsccPersonalizeCampaignCampaignConfig: dataAwsccPersonalizeCampaign.DataAwsccPersonalizeCampaignCampaignConfig = { ... }
```


### DataAwsccPersonalizeCampaignConfig <a name="DataAwsccPersonalizeCampaignConfig" id="@cdktn/provider-awscc.dataAwsccPersonalizeCampaign.DataAwsccPersonalizeCampaignConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccPersonalizeCampaign.DataAwsccPersonalizeCampaignConfig.Initializer"></a>

```typescript
import { dataAwsccPersonalizeCampaign } from '@cdktn/provider-awscc'

const dataAwsccPersonalizeCampaignConfig: dataAwsccPersonalizeCampaign.DataAwsccPersonalizeCampaignConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPersonalizeCampaign.DataAwsccPersonalizeCampaignConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPersonalizeCampaign.DataAwsccPersonalizeCampaignConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPersonalizeCampaign.DataAwsccPersonalizeCampaignConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPersonalizeCampaign.DataAwsccPersonalizeCampaignConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPersonalizeCampaign.DataAwsccPersonalizeCampaignConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPersonalizeCampaign.DataAwsccPersonalizeCampaignConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPersonalizeCampaign.DataAwsccPersonalizeCampaignConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPersonalizeCampaign.DataAwsccPersonalizeCampaignConfig.property.id">id</a></code> | <code>string</code> | Uniquely identifies the resource. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.dataAwsccPersonalizeCampaign.DataAwsccPersonalizeCampaignConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccPersonalizeCampaign.DataAwsccPersonalizeCampaignConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.dataAwsccPersonalizeCampaign.DataAwsccPersonalizeCampaignConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.dataAwsccPersonalizeCampaign.DataAwsccPersonalizeCampaignConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccPersonalizeCampaign.DataAwsccPersonalizeCampaignConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccPersonalizeCampaign.DataAwsccPersonalizeCampaignConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.dataAwsccPersonalizeCampaign.DataAwsccPersonalizeCampaignConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccPersonalizeCampaign.DataAwsccPersonalizeCampaignConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/data-sources/personalize_campaign#id DataAwsccPersonalizeCampaign#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAwsccPersonalizeCampaignTags <a name="DataAwsccPersonalizeCampaignTags" id="@cdktn/provider-awscc.dataAwsccPersonalizeCampaign.DataAwsccPersonalizeCampaignTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccPersonalizeCampaign.DataAwsccPersonalizeCampaignTags.Initializer"></a>

```typescript
import { dataAwsccPersonalizeCampaign } from '@cdktn/provider-awscc'

const dataAwsccPersonalizeCampaignTags: dataAwsccPersonalizeCampaign.DataAwsccPersonalizeCampaignTags = { ... }
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsccPersonalizeCampaignCampaignConfigOutputReference <a name="DataAwsccPersonalizeCampaignCampaignConfigOutputReference" id="@cdktn/provider-awscc.dataAwsccPersonalizeCampaign.DataAwsccPersonalizeCampaignCampaignConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccPersonalizeCampaign.DataAwsccPersonalizeCampaignCampaignConfigOutputReference.Initializer"></a>

```typescript
import { dataAwsccPersonalizeCampaign } from '@cdktn/provider-awscc'

new dataAwsccPersonalizeCampaign.DataAwsccPersonalizeCampaignCampaignConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPersonalizeCampaign.DataAwsccPersonalizeCampaignCampaignConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPersonalizeCampaign.DataAwsccPersonalizeCampaignCampaignConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccPersonalizeCampaign.DataAwsccPersonalizeCampaignCampaignConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPersonalizeCampaign.DataAwsccPersonalizeCampaignCampaignConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPersonalizeCampaign.DataAwsccPersonalizeCampaignCampaignConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPersonalizeCampaign.DataAwsccPersonalizeCampaignCampaignConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPersonalizeCampaign.DataAwsccPersonalizeCampaignCampaignConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPersonalizeCampaign.DataAwsccPersonalizeCampaignCampaignConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPersonalizeCampaign.DataAwsccPersonalizeCampaignCampaignConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPersonalizeCampaign.DataAwsccPersonalizeCampaignCampaignConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPersonalizeCampaign.DataAwsccPersonalizeCampaignCampaignConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPersonalizeCampaign.DataAwsccPersonalizeCampaignCampaignConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPersonalizeCampaign.DataAwsccPersonalizeCampaignCampaignConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPersonalizeCampaign.DataAwsccPersonalizeCampaignCampaignConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPersonalizeCampaign.DataAwsccPersonalizeCampaignCampaignConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPersonalizeCampaign.DataAwsccPersonalizeCampaignCampaignConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPersonalizeCampaign.DataAwsccPersonalizeCampaignCampaignConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccPersonalizeCampaign.DataAwsccPersonalizeCampaignCampaignConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccPersonalizeCampaign.DataAwsccPersonalizeCampaignCampaignConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPersonalizeCampaign.DataAwsccPersonalizeCampaignCampaignConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccPersonalizeCampaign.DataAwsccPersonalizeCampaignCampaignConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPersonalizeCampaign.DataAwsccPersonalizeCampaignCampaignConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccPersonalizeCampaign.DataAwsccPersonalizeCampaignCampaignConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPersonalizeCampaign.DataAwsccPersonalizeCampaignCampaignConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccPersonalizeCampaign.DataAwsccPersonalizeCampaignCampaignConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPersonalizeCampaign.DataAwsccPersonalizeCampaignCampaignConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccPersonalizeCampaign.DataAwsccPersonalizeCampaignCampaignConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPersonalizeCampaign.DataAwsccPersonalizeCampaignCampaignConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccPersonalizeCampaign.DataAwsccPersonalizeCampaignCampaignConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPersonalizeCampaign.DataAwsccPersonalizeCampaignCampaignConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccPersonalizeCampaign.DataAwsccPersonalizeCampaignCampaignConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPersonalizeCampaign.DataAwsccPersonalizeCampaignCampaignConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccPersonalizeCampaign.DataAwsccPersonalizeCampaignCampaignConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPersonalizeCampaign.DataAwsccPersonalizeCampaignCampaignConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccPersonalizeCampaign.DataAwsccPersonalizeCampaignCampaignConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPersonalizeCampaign.DataAwsccPersonalizeCampaignCampaignConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccPersonalizeCampaign.DataAwsccPersonalizeCampaignCampaignConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccPersonalizeCampaign.DataAwsccPersonalizeCampaignCampaignConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccPersonalizeCampaign.DataAwsccPersonalizeCampaignCampaignConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccPersonalizeCampaign.DataAwsccPersonalizeCampaignCampaignConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccPersonalizeCampaign.DataAwsccPersonalizeCampaignCampaignConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPersonalizeCampaign.DataAwsccPersonalizeCampaignCampaignConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPersonalizeCampaign.DataAwsccPersonalizeCampaignCampaignConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPersonalizeCampaign.DataAwsccPersonalizeCampaignCampaignConfigOutputReference.property.enableMetadataWithRecommendations">enableMetadataWithRecommendations</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPersonalizeCampaign.DataAwsccPersonalizeCampaignCampaignConfigOutputReference.property.itemExplorationConfig">itemExplorationConfig</a></code> | <code>cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPersonalizeCampaign.DataAwsccPersonalizeCampaignCampaignConfigOutputReference.property.rankingInfluence">rankingInfluence</a></code> | <code>cdktn.NumberMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPersonalizeCampaign.DataAwsccPersonalizeCampaignCampaignConfigOutputReference.property.syncWithLatestSolutionVersion">syncWithLatestSolutionVersion</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPersonalizeCampaign.DataAwsccPersonalizeCampaignCampaignConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccPersonalizeCampaign.DataAwsccPersonalizeCampaignCampaignConfig">DataAwsccPersonalizeCampaignCampaignConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccPersonalizeCampaign.DataAwsccPersonalizeCampaignCampaignConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccPersonalizeCampaign.DataAwsccPersonalizeCampaignCampaignConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `enableMetadataWithRecommendations`<sup>Required</sup> <a name="enableMetadataWithRecommendations" id="@cdktn/provider-awscc.dataAwsccPersonalizeCampaign.DataAwsccPersonalizeCampaignCampaignConfigOutputReference.property.enableMetadataWithRecommendations"></a>

```typescript
public readonly enableMetadataWithRecommendations: IResolvable;
```

- *Type:* cdktn.IResolvable

---

##### `itemExplorationConfig`<sup>Required</sup> <a name="itemExplorationConfig" id="@cdktn/provider-awscc.dataAwsccPersonalizeCampaign.DataAwsccPersonalizeCampaignCampaignConfigOutputReference.property.itemExplorationConfig"></a>

```typescript
public readonly itemExplorationConfig: StringMap;
```

- *Type:* cdktn.StringMap

---

##### `rankingInfluence`<sup>Required</sup> <a name="rankingInfluence" id="@cdktn/provider-awscc.dataAwsccPersonalizeCampaign.DataAwsccPersonalizeCampaignCampaignConfigOutputReference.property.rankingInfluence"></a>

```typescript
public readonly rankingInfluence: NumberMap;
```

- *Type:* cdktn.NumberMap

---

##### `syncWithLatestSolutionVersion`<sup>Required</sup> <a name="syncWithLatestSolutionVersion" id="@cdktn/provider-awscc.dataAwsccPersonalizeCampaign.DataAwsccPersonalizeCampaignCampaignConfigOutputReference.property.syncWithLatestSolutionVersion"></a>

```typescript
public readonly syncWithLatestSolutionVersion: IResolvable;
```

- *Type:* cdktn.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccPersonalizeCampaign.DataAwsccPersonalizeCampaignCampaignConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccPersonalizeCampaignCampaignConfig;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccPersonalizeCampaign.DataAwsccPersonalizeCampaignCampaignConfig">DataAwsccPersonalizeCampaignCampaignConfig</a>

---


### DataAwsccPersonalizeCampaignTagsList <a name="DataAwsccPersonalizeCampaignTagsList" id="@cdktn/provider-awscc.dataAwsccPersonalizeCampaign.DataAwsccPersonalizeCampaignTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccPersonalizeCampaign.DataAwsccPersonalizeCampaignTagsList.Initializer"></a>

```typescript
import { dataAwsccPersonalizeCampaign } from '@cdktn/provider-awscc'

new dataAwsccPersonalizeCampaign.DataAwsccPersonalizeCampaignTagsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPersonalizeCampaign.DataAwsccPersonalizeCampaignTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPersonalizeCampaign.DataAwsccPersonalizeCampaignTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPersonalizeCampaign.DataAwsccPersonalizeCampaignTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccPersonalizeCampaign.DataAwsccPersonalizeCampaignTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPersonalizeCampaign.DataAwsccPersonalizeCampaignTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccPersonalizeCampaign.DataAwsccPersonalizeCampaignTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPersonalizeCampaign.DataAwsccPersonalizeCampaignTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPersonalizeCampaign.DataAwsccPersonalizeCampaignTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPersonalizeCampaign.DataAwsccPersonalizeCampaignTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPersonalizeCampaign.DataAwsccPersonalizeCampaignTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPersonalizeCampaign.DataAwsccPersonalizeCampaignTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.dataAwsccPersonalizeCampaign.DataAwsccPersonalizeCampaignTagsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccPersonalizeCampaign.DataAwsccPersonalizeCampaignTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccPersonalizeCampaign.DataAwsccPersonalizeCampaignTagsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccPersonalizeCampaign.DataAwsccPersonalizeCampaignTagsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccPersonalizeCampaign.DataAwsccPersonalizeCampaignTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccPersonalizeCampaign.DataAwsccPersonalizeCampaignTagsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccPersonalizeCampaign.DataAwsccPersonalizeCampaignTagsList.get"></a>

```typescript
public get(index: number): DataAwsccPersonalizeCampaignTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccPersonalizeCampaign.DataAwsccPersonalizeCampaignTagsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPersonalizeCampaign.DataAwsccPersonalizeCampaignTagsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPersonalizeCampaign.DataAwsccPersonalizeCampaignTagsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccPersonalizeCampaign.DataAwsccPersonalizeCampaignTagsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccPersonalizeCampaign.DataAwsccPersonalizeCampaignTagsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAwsccPersonalizeCampaignTagsOutputReference <a name="DataAwsccPersonalizeCampaignTagsOutputReference" id="@cdktn/provider-awscc.dataAwsccPersonalizeCampaign.DataAwsccPersonalizeCampaignTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccPersonalizeCampaign.DataAwsccPersonalizeCampaignTagsOutputReference.Initializer"></a>

```typescript
import { dataAwsccPersonalizeCampaign } from '@cdktn/provider-awscc'

new dataAwsccPersonalizeCampaign.DataAwsccPersonalizeCampaignTagsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPersonalizeCampaign.DataAwsccPersonalizeCampaignTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPersonalizeCampaign.DataAwsccPersonalizeCampaignTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPersonalizeCampaign.DataAwsccPersonalizeCampaignTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPersonalizeCampaign.DataAwsccPersonalizeCampaignTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccPersonalizeCampaign.DataAwsccPersonalizeCampaignTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPersonalizeCampaign.DataAwsccPersonalizeCampaignTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccPersonalizeCampaign.DataAwsccPersonalizeCampaignTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccPersonalizeCampaign.DataAwsccPersonalizeCampaignTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPersonalizeCampaign.DataAwsccPersonalizeCampaignTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPersonalizeCampaign.DataAwsccPersonalizeCampaignTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPersonalizeCampaign.DataAwsccPersonalizeCampaignTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPersonalizeCampaign.DataAwsccPersonalizeCampaignTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPersonalizeCampaign.DataAwsccPersonalizeCampaignTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPersonalizeCampaign.DataAwsccPersonalizeCampaignTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPersonalizeCampaign.DataAwsccPersonalizeCampaignTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPersonalizeCampaign.DataAwsccPersonalizeCampaignTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPersonalizeCampaign.DataAwsccPersonalizeCampaignTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPersonalizeCampaign.DataAwsccPersonalizeCampaignTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPersonalizeCampaign.DataAwsccPersonalizeCampaignTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPersonalizeCampaign.DataAwsccPersonalizeCampaignTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPersonalizeCampaign.DataAwsccPersonalizeCampaignTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccPersonalizeCampaign.DataAwsccPersonalizeCampaignTagsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccPersonalizeCampaign.DataAwsccPersonalizeCampaignTagsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPersonalizeCampaign.DataAwsccPersonalizeCampaignTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccPersonalizeCampaign.DataAwsccPersonalizeCampaignTagsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPersonalizeCampaign.DataAwsccPersonalizeCampaignTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccPersonalizeCampaign.DataAwsccPersonalizeCampaignTagsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPersonalizeCampaign.DataAwsccPersonalizeCampaignTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccPersonalizeCampaign.DataAwsccPersonalizeCampaignTagsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPersonalizeCampaign.DataAwsccPersonalizeCampaignTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccPersonalizeCampaign.DataAwsccPersonalizeCampaignTagsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPersonalizeCampaign.DataAwsccPersonalizeCampaignTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccPersonalizeCampaign.DataAwsccPersonalizeCampaignTagsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPersonalizeCampaign.DataAwsccPersonalizeCampaignTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccPersonalizeCampaign.DataAwsccPersonalizeCampaignTagsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPersonalizeCampaign.DataAwsccPersonalizeCampaignTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccPersonalizeCampaign.DataAwsccPersonalizeCampaignTagsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPersonalizeCampaign.DataAwsccPersonalizeCampaignTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccPersonalizeCampaign.DataAwsccPersonalizeCampaignTagsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPersonalizeCampaign.DataAwsccPersonalizeCampaignTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccPersonalizeCampaign.DataAwsccPersonalizeCampaignTagsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccPersonalizeCampaign.DataAwsccPersonalizeCampaignTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccPersonalizeCampaign.DataAwsccPersonalizeCampaignTagsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccPersonalizeCampaign.DataAwsccPersonalizeCampaignTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccPersonalizeCampaign.DataAwsccPersonalizeCampaignTagsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPersonalizeCampaign.DataAwsccPersonalizeCampaignTagsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPersonalizeCampaign.DataAwsccPersonalizeCampaignTagsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPersonalizeCampaign.DataAwsccPersonalizeCampaignTagsOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPersonalizeCampaign.DataAwsccPersonalizeCampaignTagsOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPersonalizeCampaign.DataAwsccPersonalizeCampaignTagsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccPersonalizeCampaign.DataAwsccPersonalizeCampaignTags">DataAwsccPersonalizeCampaignTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccPersonalizeCampaign.DataAwsccPersonalizeCampaignTagsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccPersonalizeCampaign.DataAwsccPersonalizeCampaignTagsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.dataAwsccPersonalizeCampaign.DataAwsccPersonalizeCampaignTagsOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccPersonalizeCampaign.DataAwsccPersonalizeCampaignTagsOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccPersonalizeCampaign.DataAwsccPersonalizeCampaignTagsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccPersonalizeCampaignTags;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccPersonalizeCampaign.DataAwsccPersonalizeCampaignTags">DataAwsccPersonalizeCampaignTags</a>

---



