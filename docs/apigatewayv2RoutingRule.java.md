# `apigatewayv2RoutingRule` Submodule <a name="`apigatewayv2RoutingRule` Submodule" id="@cdktn/provider-awscc.apigatewayv2RoutingRule"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### Apigatewayv2RoutingRule <a name="Apigatewayv2RoutingRule" id="@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRule"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/apigatewayv2_routing_rule awscc_apigatewayv2_routing_rule}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRule.Initializer"></a>

```java
import io.cdktn.providers.awscc.apigatewayv2_routing_rule.Apigatewayv2RoutingRule;

Apigatewayv2RoutingRule.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .actions(IResolvable|java.util.List<Apigatewayv2RoutingRuleActions>)
    .conditions(IResolvable|java.util.List<Apigatewayv2RoutingRuleConditions>)
    .domainNameArn(java.lang.String)
    .priority(java.lang.Number)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRule.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRule.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRule.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRule.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRule.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRule.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRule.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRule.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRule.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRule.Initializer.parameter.actions">actions</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActions">Apigatewayv2RoutingRuleActions</a>></code> | The resulting action based on matching a routing rules condition. Only InvokeApi is supported. |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRule.Initializer.parameter.conditions">conditions</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditions">Apigatewayv2RoutingRuleConditions</a>></code> | The conditions of the routing rule. |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRule.Initializer.parameter.domainNameArn">domainNameArn</a></code> | <code>java.lang.String</code> | The ARN of the domain name. |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRule.Initializer.parameter.priority">priority</a></code> | <code>java.lang.Number</code> | The order in which API Gateway evaluates a rule. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRule.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRule.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRule.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRule.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRule.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRule.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRule.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRule.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRule.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `actions`<sup>Required</sup> <a name="actions" id="@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRule.Initializer.parameter.actions"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActions">Apigatewayv2RoutingRuleActions</a>>

The resulting action based on matching a routing rules condition. Only InvokeApi is supported.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/apigatewayv2_routing_rule#actions Apigatewayv2RoutingRule#actions}

---

##### `conditions`<sup>Required</sup> <a name="conditions" id="@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRule.Initializer.parameter.conditions"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditions">Apigatewayv2RoutingRuleConditions</a>>

The conditions of the routing rule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/apigatewayv2_routing_rule#conditions Apigatewayv2RoutingRule#conditions}

---

##### `domainNameArn`<sup>Required</sup> <a name="domainNameArn" id="@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRule.Initializer.parameter.domainNameArn"></a>

- *Type:* java.lang.String

The ARN of the domain name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/apigatewayv2_routing_rule#domain_name_arn Apigatewayv2RoutingRule#domain_name_arn}

---

##### `priority`<sup>Required</sup> <a name="priority" id="@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRule.Initializer.parameter.priority"></a>

- *Type:* java.lang.Number

The order in which API Gateway evaluates a rule.

Priority is evaluated from the lowest value to the highest value. Rules can't have the same priority. Priority values 1-1,000,000 are supported.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/apigatewayv2_routing_rule#priority Apigatewayv2RoutingRule#priority}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRule.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRule.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRule.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRule.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRule.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRule.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRule.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRule.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRule.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRule.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRule.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRule.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRule.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRule.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRule.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRule.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRule.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRule.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRule.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRule.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRule.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRule.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRule.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRule.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRule.putActions">putActions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRule.putConditions">putConditions</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRule.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRule.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRule.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRule.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRule.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRule.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRule.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRule.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRule.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRule.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRule.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRule.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRule.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRule.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRule.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRule.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRule.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRule.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRule.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRule.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRule.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRule.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRule.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRule.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRule.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRule.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRule.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRule.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRule.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRule.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRule.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRule.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRule.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRule.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRule.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRule.importFrom.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRule.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRule.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRule.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRule.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRule.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRule.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRule.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRule.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRule.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putActions` <a name="putActions" id="@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRule.putActions"></a>

```java
public void putActions(IResolvable|java.util.List<Apigatewayv2RoutingRuleActions> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRule.putActions.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActions">Apigatewayv2RoutingRuleActions</a>>

---

##### `putConditions` <a name="putConditions" id="@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRule.putConditions"></a>

```java
public void putConditions(IResolvable|java.util.List<Apigatewayv2RoutingRuleConditions> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRule.putConditions.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditions">Apigatewayv2RoutingRuleConditions</a>>

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRule.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRule.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRule.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRule.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a Apigatewayv2RoutingRule resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRule.isConstruct"></a>

```java
import io.cdktn.providers.awscc.apigatewayv2_routing_rule.Apigatewayv2RoutingRule;

Apigatewayv2RoutingRule.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRule.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRule.isTerraformElement"></a>

```java
import io.cdktn.providers.awscc.apigatewayv2_routing_rule.Apigatewayv2RoutingRule;

Apigatewayv2RoutingRule.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRule.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRule.isTerraformResource"></a>

```java
import io.cdktn.providers.awscc.apigatewayv2_routing_rule.Apigatewayv2RoutingRule;

Apigatewayv2RoutingRule.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRule.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRule.generateConfigForImport"></a>

```java
import io.cdktn.providers.awscc.apigatewayv2_routing_rule.Apigatewayv2RoutingRule;

Apigatewayv2RoutingRule.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),Apigatewayv2RoutingRule.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a Apigatewayv2RoutingRule resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRule.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRule.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the Apigatewayv2RoutingRule to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRule.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing Apigatewayv2RoutingRule that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/apigatewayv2_routing_rule#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRule.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the Apigatewayv2RoutingRule to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRule.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRule.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRule.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRule.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRule.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRule.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRule.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRule.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRule.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRule.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRule.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRule.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRule.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRule.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRule.property.actions">actions</a></code> | <code><a href="#@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionsList">Apigatewayv2RoutingRuleActionsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRule.property.conditions">conditions</a></code> | <code><a href="#@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionsList">Apigatewayv2RoutingRuleConditionsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRule.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRule.property.routingRuleArn">routingRuleArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRule.property.routingRuleId">routingRuleId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRule.property.actionsInput">actionsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActions">Apigatewayv2RoutingRuleActions</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRule.property.conditionsInput">conditionsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditions">Apigatewayv2RoutingRuleConditions</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRule.property.domainNameArnInput">domainNameArnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRule.property.priorityInput">priorityInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRule.property.domainNameArn">domainNameArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRule.property.priority">priority</a></code> | <code>java.lang.Number</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRule.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRule.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRule.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRule.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRule.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRule.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRule.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRule.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRule.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRule.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRule.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRule.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRule.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRule.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `actions`<sup>Required</sup> <a name="actions" id="@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRule.property.actions"></a>

```java
public Apigatewayv2RoutingRuleActionsList getActions();
```

- *Type:* <a href="#@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionsList">Apigatewayv2RoutingRuleActionsList</a>

---

##### `conditions`<sup>Required</sup> <a name="conditions" id="@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRule.property.conditions"></a>

```java
public Apigatewayv2RoutingRuleConditionsList getConditions();
```

- *Type:* <a href="#@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionsList">Apigatewayv2RoutingRuleConditionsList</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRule.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `routingRuleArn`<sup>Required</sup> <a name="routingRuleArn" id="@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRule.property.routingRuleArn"></a>

```java
public java.lang.String getRoutingRuleArn();
```

- *Type:* java.lang.String

---

##### `routingRuleId`<sup>Required</sup> <a name="routingRuleId" id="@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRule.property.routingRuleId"></a>

```java
public java.lang.String getRoutingRuleId();
```

- *Type:* java.lang.String

---

##### `actionsInput`<sup>Optional</sup> <a name="actionsInput" id="@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRule.property.actionsInput"></a>

```java
public IResolvable|java.util.List<Apigatewayv2RoutingRuleActions> getActionsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActions">Apigatewayv2RoutingRuleActions</a>>

---

##### `conditionsInput`<sup>Optional</sup> <a name="conditionsInput" id="@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRule.property.conditionsInput"></a>

```java
public IResolvable|java.util.List<Apigatewayv2RoutingRuleConditions> getConditionsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditions">Apigatewayv2RoutingRuleConditions</a>>

---

##### `domainNameArnInput`<sup>Optional</sup> <a name="domainNameArnInput" id="@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRule.property.domainNameArnInput"></a>

```java
public java.lang.String getDomainNameArnInput();
```

- *Type:* java.lang.String

---

##### `priorityInput`<sup>Optional</sup> <a name="priorityInput" id="@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRule.property.priorityInput"></a>

```java
public java.lang.Number getPriorityInput();
```

- *Type:* java.lang.Number

---

##### `domainNameArn`<sup>Required</sup> <a name="domainNameArn" id="@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRule.property.domainNameArn"></a>

```java
public java.lang.String getDomainNameArn();
```

- *Type:* java.lang.String

---

##### `priority`<sup>Required</sup> <a name="priority" id="@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRule.property.priority"></a>

```java
public java.lang.Number getPriority();
```

- *Type:* java.lang.Number

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRule.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRule.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### Apigatewayv2RoutingRuleActions <a name="Apigatewayv2RoutingRuleActions" id="@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActions.Initializer"></a>

```java
import io.cdktn.providers.awscc.apigatewayv2_routing_rule.Apigatewayv2RoutingRuleActions;

Apigatewayv2RoutingRuleActions.builder()
    .invokeApi(Apigatewayv2RoutingRuleActionsInvokeApi)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActions.property.invokeApi">invokeApi</a></code> | <code><a href="#@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionsInvokeApi">Apigatewayv2RoutingRuleActionsInvokeApi</a></code> | Represents an InvokeApi action. |

---

##### `invokeApi`<sup>Required</sup> <a name="invokeApi" id="@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActions.property.invokeApi"></a>

```java
public Apigatewayv2RoutingRuleActionsInvokeApi getInvokeApi();
```

- *Type:* <a href="#@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionsInvokeApi">Apigatewayv2RoutingRuleActionsInvokeApi</a>

Represents an InvokeApi action.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/apigatewayv2_routing_rule#invoke_api Apigatewayv2RoutingRule#invoke_api}

---

### Apigatewayv2RoutingRuleActionsInvokeApi <a name="Apigatewayv2RoutingRuleActionsInvokeApi" id="@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionsInvokeApi"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionsInvokeApi.Initializer"></a>

```java
import io.cdktn.providers.awscc.apigatewayv2_routing_rule.Apigatewayv2RoutingRuleActionsInvokeApi;

Apigatewayv2RoutingRuleActionsInvokeApi.builder()
    .apiId(java.lang.String)
    .stage(java.lang.String)
//  .stripBasePath(java.lang.Boolean|IResolvable)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionsInvokeApi.property.apiId">apiId</a></code> | <code>java.lang.String</code> | The API identifier of the target API. |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionsInvokeApi.property.stage">stage</a></code> | <code>java.lang.String</code> | The name of the target stage. |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionsInvokeApi.property.stripBasePath">stripBasePath</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | The strip base path setting. |

---

##### `apiId`<sup>Required</sup> <a name="apiId" id="@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionsInvokeApi.property.apiId"></a>

```java
public java.lang.String getApiId();
```

- *Type:* java.lang.String

The API identifier of the target API.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/apigatewayv2_routing_rule#api_id Apigatewayv2RoutingRule#api_id}

---

##### `stage`<sup>Required</sup> <a name="stage" id="@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionsInvokeApi.property.stage"></a>

```java
public java.lang.String getStage();
```

- *Type:* java.lang.String

The name of the target stage.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/apigatewayv2_routing_rule#stage Apigatewayv2RoutingRule#stage}

---

##### `stripBasePath`<sup>Optional</sup> <a name="stripBasePath" id="@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionsInvokeApi.property.stripBasePath"></a>

```java
public java.lang.Boolean|IResolvable getStripBasePath();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

The strip base path setting.

When true, API Gateway strips the incoming matched base path when forwarding the request to the target API.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/apigatewayv2_routing_rule#strip_base_path Apigatewayv2RoutingRule#strip_base_path}

---

### Apigatewayv2RoutingRuleConditions <a name="Apigatewayv2RoutingRuleConditions" id="@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditions.Initializer"></a>

```java
import io.cdktn.providers.awscc.apigatewayv2_routing_rule.Apigatewayv2RoutingRuleConditions;

Apigatewayv2RoutingRuleConditions.builder()
//  .matchBasePaths(Apigatewayv2RoutingRuleConditionsMatchBasePaths)
//  .matchHeaders(Apigatewayv2RoutingRuleConditionsMatchHeaders)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditions.property.matchBasePaths">matchBasePaths</a></code> | <code><a href="#@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionsMatchBasePaths">Apigatewayv2RoutingRuleConditionsMatchBasePaths</a></code> | The base path to be matched. |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditions.property.matchHeaders">matchHeaders</a></code> | <code><a href="#@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionsMatchHeaders">Apigatewayv2RoutingRuleConditionsMatchHeaders</a></code> | The headers to be matched. |

---

##### `matchBasePaths`<sup>Optional</sup> <a name="matchBasePaths" id="@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditions.property.matchBasePaths"></a>

```java
public Apigatewayv2RoutingRuleConditionsMatchBasePaths getMatchBasePaths();
```

- *Type:* <a href="#@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionsMatchBasePaths">Apigatewayv2RoutingRuleConditionsMatchBasePaths</a>

The base path to be matched.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/apigatewayv2_routing_rule#match_base_paths Apigatewayv2RoutingRule#match_base_paths}

---

##### `matchHeaders`<sup>Optional</sup> <a name="matchHeaders" id="@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditions.property.matchHeaders"></a>

```java
public Apigatewayv2RoutingRuleConditionsMatchHeaders getMatchHeaders();
```

- *Type:* <a href="#@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionsMatchHeaders">Apigatewayv2RoutingRuleConditionsMatchHeaders</a>

The headers to be matched.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/apigatewayv2_routing_rule#match_headers Apigatewayv2RoutingRule#match_headers}

---

### Apigatewayv2RoutingRuleConditionsMatchBasePaths <a name="Apigatewayv2RoutingRuleConditionsMatchBasePaths" id="@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionsMatchBasePaths"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionsMatchBasePaths.Initializer"></a>

```java
import io.cdktn.providers.awscc.apigatewayv2_routing_rule.Apigatewayv2RoutingRuleConditionsMatchBasePaths;

Apigatewayv2RoutingRuleConditionsMatchBasePaths.builder()
//  .anyOf(java.util.List<java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionsMatchBasePaths.property.anyOf">anyOf</a></code> | <code>java.util.List<java.lang.String></code> | The string of the case sensitive base path to be matched. |

---

##### `anyOf`<sup>Optional</sup> <a name="anyOf" id="@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionsMatchBasePaths.property.anyOf"></a>

```java
public java.util.List<java.lang.String> getAnyOf();
```

- *Type:* java.util.List<java.lang.String>

The string of the case sensitive base path to be matched.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/apigatewayv2_routing_rule#any_of Apigatewayv2RoutingRule#any_of}

---

### Apigatewayv2RoutingRuleConditionsMatchHeaders <a name="Apigatewayv2RoutingRuleConditionsMatchHeaders" id="@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionsMatchHeaders"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionsMatchHeaders.Initializer"></a>

```java
import io.cdktn.providers.awscc.apigatewayv2_routing_rule.Apigatewayv2RoutingRuleConditionsMatchHeaders;

Apigatewayv2RoutingRuleConditionsMatchHeaders.builder()
//  .anyOf(IResolvable|java.util.List<Apigatewayv2RoutingRuleConditionsMatchHeadersAnyOf>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionsMatchHeaders.property.anyOf">anyOf</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionsMatchHeadersAnyOf">Apigatewayv2RoutingRuleConditionsMatchHeadersAnyOf</a>></code> | The header name and header value glob to be matched. |

---

##### `anyOf`<sup>Optional</sup> <a name="anyOf" id="@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionsMatchHeaders.property.anyOf"></a>

```java
public IResolvable|java.util.List<Apigatewayv2RoutingRuleConditionsMatchHeadersAnyOf> getAnyOf();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionsMatchHeadersAnyOf">Apigatewayv2RoutingRuleConditionsMatchHeadersAnyOf</a>>

The header name and header value glob to be matched.

The matchHeaders condition is matched if any of the header name and header value globs are matched.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/apigatewayv2_routing_rule#any_of Apigatewayv2RoutingRule#any_of}

---

### Apigatewayv2RoutingRuleConditionsMatchHeadersAnyOf <a name="Apigatewayv2RoutingRuleConditionsMatchHeadersAnyOf" id="@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionsMatchHeadersAnyOf"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionsMatchHeadersAnyOf.Initializer"></a>

```java
import io.cdktn.providers.awscc.apigatewayv2_routing_rule.Apigatewayv2RoutingRuleConditionsMatchHeadersAnyOf;

Apigatewayv2RoutingRuleConditionsMatchHeadersAnyOf.builder()
//  .header(java.lang.String)
//  .valueGlob(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionsMatchHeadersAnyOf.property.header">header</a></code> | <code>java.lang.String</code> | The case insensitive header name to be matched. |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionsMatchHeadersAnyOf.property.valueGlob">valueGlob</a></code> | <code>java.lang.String</code> | The case sensitive header glob value to be matched against entire header value. |

---

##### `header`<sup>Optional</sup> <a name="header" id="@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionsMatchHeadersAnyOf.property.header"></a>

```java
public java.lang.String getHeader();
```

- *Type:* java.lang.String

The case insensitive header name to be matched.

The header name must be less than 40 characters and the only allowed characters are `a-z`, `A-Z`, `0-9`, and the following special characters: `*?-!#$%&'.^_`|~.`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/apigatewayv2_routing_rule#header Apigatewayv2RoutingRule#header}

---

##### `valueGlob`<sup>Optional</sup> <a name="valueGlob" id="@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionsMatchHeadersAnyOf.property.valueGlob"></a>

```java
public java.lang.String getValueGlob();
```

- *Type:* java.lang.String

The case sensitive header glob value to be matched against entire header value.

The header glob value must be less than 128 characters and the only allowed characters are `a-z`, `A-Z`, `0-9`, and the following special characters: `*?-!#$%&'.^_`|~`. Wildcard matching is supported for header glob values but must be for `*prefix-match`, `suffix-match*`, or `*infix*-match`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/apigatewayv2_routing_rule#value_glob Apigatewayv2RoutingRule#value_glob}

---

### Apigatewayv2RoutingRuleConfig <a name="Apigatewayv2RoutingRuleConfig" id="@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConfig.Initializer"></a>

```java
import io.cdktn.providers.awscc.apigatewayv2_routing_rule.Apigatewayv2RoutingRuleConfig;

Apigatewayv2RoutingRuleConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .actions(IResolvable|java.util.List<Apigatewayv2RoutingRuleActions>)
    .conditions(IResolvable|java.util.List<Apigatewayv2RoutingRuleConditions>)
    .domainNameArn(java.lang.String)
    .priority(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConfig.property.actions">actions</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActions">Apigatewayv2RoutingRuleActions</a>></code> | The resulting action based on matching a routing rules condition. Only InvokeApi is supported. |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConfig.property.conditions">conditions</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditions">Apigatewayv2RoutingRuleConditions</a>></code> | The conditions of the routing rule. |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConfig.property.domainNameArn">domainNameArn</a></code> | <code>java.lang.String</code> | The ARN of the domain name. |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConfig.property.priority">priority</a></code> | <code>java.lang.Number</code> | The order in which API Gateway evaluates a rule. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `actions`<sup>Required</sup> <a name="actions" id="@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConfig.property.actions"></a>

```java
public IResolvable|java.util.List<Apigatewayv2RoutingRuleActions> getActions();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActions">Apigatewayv2RoutingRuleActions</a>>

The resulting action based on matching a routing rules condition. Only InvokeApi is supported.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/apigatewayv2_routing_rule#actions Apigatewayv2RoutingRule#actions}

---

##### `conditions`<sup>Required</sup> <a name="conditions" id="@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConfig.property.conditions"></a>

```java
public IResolvable|java.util.List<Apigatewayv2RoutingRuleConditions> getConditions();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditions">Apigatewayv2RoutingRuleConditions</a>>

The conditions of the routing rule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/apigatewayv2_routing_rule#conditions Apigatewayv2RoutingRule#conditions}

---

##### `domainNameArn`<sup>Required</sup> <a name="domainNameArn" id="@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConfig.property.domainNameArn"></a>

```java
public java.lang.String getDomainNameArn();
```

- *Type:* java.lang.String

The ARN of the domain name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/apigatewayv2_routing_rule#domain_name_arn Apigatewayv2RoutingRule#domain_name_arn}

---

##### `priority`<sup>Required</sup> <a name="priority" id="@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConfig.property.priority"></a>

```java
public java.lang.Number getPriority();
```

- *Type:* java.lang.Number

The order in which API Gateway evaluates a rule.

Priority is evaluated from the lowest value to the highest value. Rules can't have the same priority. Priority values 1-1,000,000 are supported.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/apigatewayv2_routing_rule#priority Apigatewayv2RoutingRule#priority}

---

## Classes <a name="Classes" id="Classes"></a>

### Apigatewayv2RoutingRuleActionsInvokeApiOutputReference <a name="Apigatewayv2RoutingRuleActionsInvokeApiOutputReference" id="@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionsInvokeApiOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionsInvokeApiOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.apigatewayv2_routing_rule.Apigatewayv2RoutingRuleActionsInvokeApiOutputReference;

new Apigatewayv2RoutingRuleActionsInvokeApiOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionsInvokeApiOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionsInvokeApiOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionsInvokeApiOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionsInvokeApiOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionsInvokeApiOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionsInvokeApiOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionsInvokeApiOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionsInvokeApiOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionsInvokeApiOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionsInvokeApiOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionsInvokeApiOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionsInvokeApiOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionsInvokeApiOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionsInvokeApiOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionsInvokeApiOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionsInvokeApiOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionsInvokeApiOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionsInvokeApiOutputReference.resetStripBasePath">resetStripBasePath</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionsInvokeApiOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionsInvokeApiOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionsInvokeApiOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionsInvokeApiOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionsInvokeApiOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionsInvokeApiOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionsInvokeApiOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionsInvokeApiOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionsInvokeApiOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionsInvokeApiOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionsInvokeApiOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionsInvokeApiOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionsInvokeApiOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionsInvokeApiOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionsInvokeApiOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionsInvokeApiOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionsInvokeApiOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionsInvokeApiOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionsInvokeApiOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionsInvokeApiOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionsInvokeApiOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionsInvokeApiOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionsInvokeApiOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionsInvokeApiOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetStripBasePath` <a name="resetStripBasePath" id="@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionsInvokeApiOutputReference.resetStripBasePath"></a>

```java
public void resetStripBasePath()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionsInvokeApiOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionsInvokeApiOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionsInvokeApiOutputReference.property.apiIdInput">apiIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionsInvokeApiOutputReference.property.stageInput">stageInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionsInvokeApiOutputReference.property.stripBasePathInput">stripBasePathInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionsInvokeApiOutputReference.property.apiId">apiId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionsInvokeApiOutputReference.property.stage">stage</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionsInvokeApiOutputReference.property.stripBasePath">stripBasePath</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionsInvokeApiOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionsInvokeApi">Apigatewayv2RoutingRuleActionsInvokeApi</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionsInvokeApiOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionsInvokeApiOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `apiIdInput`<sup>Optional</sup> <a name="apiIdInput" id="@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionsInvokeApiOutputReference.property.apiIdInput"></a>

```java
public java.lang.String getApiIdInput();
```

- *Type:* java.lang.String

---

##### `stageInput`<sup>Optional</sup> <a name="stageInput" id="@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionsInvokeApiOutputReference.property.stageInput"></a>

```java
public java.lang.String getStageInput();
```

- *Type:* java.lang.String

---

##### `stripBasePathInput`<sup>Optional</sup> <a name="stripBasePathInput" id="@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionsInvokeApiOutputReference.property.stripBasePathInput"></a>

```java
public java.lang.Boolean|IResolvable getStripBasePathInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `apiId`<sup>Required</sup> <a name="apiId" id="@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionsInvokeApiOutputReference.property.apiId"></a>

```java
public java.lang.String getApiId();
```

- *Type:* java.lang.String

---

##### `stage`<sup>Required</sup> <a name="stage" id="@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionsInvokeApiOutputReference.property.stage"></a>

```java
public java.lang.String getStage();
```

- *Type:* java.lang.String

---

##### `stripBasePath`<sup>Required</sup> <a name="stripBasePath" id="@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionsInvokeApiOutputReference.property.stripBasePath"></a>

```java
public java.lang.Boolean|IResolvable getStripBasePath();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionsInvokeApiOutputReference.property.internalValue"></a>

```java
public IResolvable|Apigatewayv2RoutingRuleActionsInvokeApi getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionsInvokeApi">Apigatewayv2RoutingRuleActionsInvokeApi</a>

---


### Apigatewayv2RoutingRuleActionsList <a name="Apigatewayv2RoutingRuleActionsList" id="@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionsList.Initializer"></a>

```java
import io.cdktn.providers.awscc.apigatewayv2_routing_rule.Apigatewayv2RoutingRuleActionsList;

new Apigatewayv2RoutingRuleActionsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionsList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionsList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionsList.get"></a>

```java
public Apigatewayv2RoutingRuleActionsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionsList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActions">Apigatewayv2RoutingRuleActions</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionsList.property.internalValue"></a>

```java
public IResolvable|java.util.List<Apigatewayv2RoutingRuleActions> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActions">Apigatewayv2RoutingRuleActions</a>>

---


### Apigatewayv2RoutingRuleActionsOutputReference <a name="Apigatewayv2RoutingRuleActionsOutputReference" id="@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.apigatewayv2_routing_rule.Apigatewayv2RoutingRuleActionsOutputReference;

new Apigatewayv2RoutingRuleActionsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionsOutputReference.putInvokeApi">putInvokeApi</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putInvokeApi` <a name="putInvokeApi" id="@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionsOutputReference.putInvokeApi"></a>

```java
public void putInvokeApi(Apigatewayv2RoutingRuleActionsInvokeApi value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionsOutputReference.putInvokeApi.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionsInvokeApi">Apigatewayv2RoutingRuleActionsInvokeApi</a>

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionsOutputReference.property.invokeApi">invokeApi</a></code> | <code><a href="#@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionsInvokeApiOutputReference">Apigatewayv2RoutingRuleActionsInvokeApiOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionsOutputReference.property.invokeApiInput">invokeApiInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionsInvokeApi">Apigatewayv2RoutingRuleActionsInvokeApi</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActions">Apigatewayv2RoutingRuleActions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `invokeApi`<sup>Required</sup> <a name="invokeApi" id="@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionsOutputReference.property.invokeApi"></a>

```java
public Apigatewayv2RoutingRuleActionsInvokeApiOutputReference getInvokeApi();
```

- *Type:* <a href="#@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionsInvokeApiOutputReference">Apigatewayv2RoutingRuleActionsInvokeApiOutputReference</a>

---

##### `invokeApiInput`<sup>Optional</sup> <a name="invokeApiInput" id="@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionsOutputReference.property.invokeApiInput"></a>

```java
public IResolvable|Apigatewayv2RoutingRuleActionsInvokeApi getInvokeApiInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionsInvokeApi">Apigatewayv2RoutingRuleActionsInvokeApi</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionsOutputReference.property.internalValue"></a>

```java
public IResolvable|Apigatewayv2RoutingRuleActions getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActions">Apigatewayv2RoutingRuleActions</a>

---


### Apigatewayv2RoutingRuleConditionsList <a name="Apigatewayv2RoutingRuleConditionsList" id="@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionsList.Initializer"></a>

```java
import io.cdktn.providers.awscc.apigatewayv2_routing_rule.Apigatewayv2RoutingRuleConditionsList;

new Apigatewayv2RoutingRuleConditionsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionsList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionsList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionsList.get"></a>

```java
public Apigatewayv2RoutingRuleConditionsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionsList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditions">Apigatewayv2RoutingRuleConditions</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionsList.property.internalValue"></a>

```java
public IResolvable|java.util.List<Apigatewayv2RoutingRuleConditions> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditions">Apigatewayv2RoutingRuleConditions</a>>

---


### Apigatewayv2RoutingRuleConditionsMatchBasePathsOutputReference <a name="Apigatewayv2RoutingRuleConditionsMatchBasePathsOutputReference" id="@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionsMatchBasePathsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionsMatchBasePathsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.apigatewayv2_routing_rule.Apigatewayv2RoutingRuleConditionsMatchBasePathsOutputReference;

new Apigatewayv2RoutingRuleConditionsMatchBasePathsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionsMatchBasePathsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionsMatchBasePathsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionsMatchBasePathsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionsMatchBasePathsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionsMatchBasePathsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionsMatchBasePathsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionsMatchBasePathsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionsMatchBasePathsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionsMatchBasePathsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionsMatchBasePathsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionsMatchBasePathsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionsMatchBasePathsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionsMatchBasePathsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionsMatchBasePathsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionsMatchBasePathsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionsMatchBasePathsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionsMatchBasePathsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionsMatchBasePathsOutputReference.resetAnyOf">resetAnyOf</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionsMatchBasePathsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionsMatchBasePathsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionsMatchBasePathsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionsMatchBasePathsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionsMatchBasePathsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionsMatchBasePathsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionsMatchBasePathsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionsMatchBasePathsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionsMatchBasePathsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionsMatchBasePathsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionsMatchBasePathsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionsMatchBasePathsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionsMatchBasePathsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionsMatchBasePathsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionsMatchBasePathsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionsMatchBasePathsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionsMatchBasePathsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionsMatchBasePathsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionsMatchBasePathsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionsMatchBasePathsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionsMatchBasePathsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionsMatchBasePathsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionsMatchBasePathsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionsMatchBasePathsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAnyOf` <a name="resetAnyOf" id="@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionsMatchBasePathsOutputReference.resetAnyOf"></a>

```java
public void resetAnyOf()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionsMatchBasePathsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionsMatchBasePathsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionsMatchBasePathsOutputReference.property.anyOfInput">anyOfInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionsMatchBasePathsOutputReference.property.anyOf">anyOf</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionsMatchBasePathsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionsMatchBasePaths">Apigatewayv2RoutingRuleConditionsMatchBasePaths</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionsMatchBasePathsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionsMatchBasePathsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `anyOfInput`<sup>Optional</sup> <a name="anyOfInput" id="@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionsMatchBasePathsOutputReference.property.anyOfInput"></a>

```java
public java.util.List<java.lang.String> getAnyOfInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `anyOf`<sup>Required</sup> <a name="anyOf" id="@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionsMatchBasePathsOutputReference.property.anyOf"></a>

```java
public java.util.List<java.lang.String> getAnyOf();
```

- *Type:* java.util.List<java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionsMatchBasePathsOutputReference.property.internalValue"></a>

```java
public IResolvable|Apigatewayv2RoutingRuleConditionsMatchBasePaths getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionsMatchBasePaths">Apigatewayv2RoutingRuleConditionsMatchBasePaths</a>

---


### Apigatewayv2RoutingRuleConditionsMatchHeadersAnyOfList <a name="Apigatewayv2RoutingRuleConditionsMatchHeadersAnyOfList" id="@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionsMatchHeadersAnyOfList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionsMatchHeadersAnyOfList.Initializer"></a>

```java
import io.cdktn.providers.awscc.apigatewayv2_routing_rule.Apigatewayv2RoutingRuleConditionsMatchHeadersAnyOfList;

new Apigatewayv2RoutingRuleConditionsMatchHeadersAnyOfList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionsMatchHeadersAnyOfList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionsMatchHeadersAnyOfList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionsMatchHeadersAnyOfList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionsMatchHeadersAnyOfList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionsMatchHeadersAnyOfList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionsMatchHeadersAnyOfList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionsMatchHeadersAnyOfList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionsMatchHeadersAnyOfList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionsMatchHeadersAnyOfList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionsMatchHeadersAnyOfList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionsMatchHeadersAnyOfList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionsMatchHeadersAnyOfList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionsMatchHeadersAnyOfList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionsMatchHeadersAnyOfList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionsMatchHeadersAnyOfList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionsMatchHeadersAnyOfList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionsMatchHeadersAnyOfList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionsMatchHeadersAnyOfList.get"></a>

```java
public Apigatewayv2RoutingRuleConditionsMatchHeadersAnyOfOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionsMatchHeadersAnyOfList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionsMatchHeadersAnyOfList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionsMatchHeadersAnyOfList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionsMatchHeadersAnyOfList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionsMatchHeadersAnyOf">Apigatewayv2RoutingRuleConditionsMatchHeadersAnyOf</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionsMatchHeadersAnyOfList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionsMatchHeadersAnyOfList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionsMatchHeadersAnyOfList.property.internalValue"></a>

```java
public IResolvable|java.util.List<Apigatewayv2RoutingRuleConditionsMatchHeadersAnyOf> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionsMatchHeadersAnyOf">Apigatewayv2RoutingRuleConditionsMatchHeadersAnyOf</a>>

---


### Apigatewayv2RoutingRuleConditionsMatchHeadersAnyOfOutputReference <a name="Apigatewayv2RoutingRuleConditionsMatchHeadersAnyOfOutputReference" id="@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionsMatchHeadersAnyOfOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionsMatchHeadersAnyOfOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.apigatewayv2_routing_rule.Apigatewayv2RoutingRuleConditionsMatchHeadersAnyOfOutputReference;

new Apigatewayv2RoutingRuleConditionsMatchHeadersAnyOfOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionsMatchHeadersAnyOfOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionsMatchHeadersAnyOfOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionsMatchHeadersAnyOfOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionsMatchHeadersAnyOfOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionsMatchHeadersAnyOfOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionsMatchHeadersAnyOfOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionsMatchHeadersAnyOfOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionsMatchHeadersAnyOfOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionsMatchHeadersAnyOfOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionsMatchHeadersAnyOfOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionsMatchHeadersAnyOfOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionsMatchHeadersAnyOfOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionsMatchHeadersAnyOfOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionsMatchHeadersAnyOfOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionsMatchHeadersAnyOfOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionsMatchHeadersAnyOfOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionsMatchHeadersAnyOfOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionsMatchHeadersAnyOfOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionsMatchHeadersAnyOfOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionsMatchHeadersAnyOfOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionsMatchHeadersAnyOfOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionsMatchHeadersAnyOfOutputReference.resetHeader">resetHeader</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionsMatchHeadersAnyOfOutputReference.resetValueGlob">resetValueGlob</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionsMatchHeadersAnyOfOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionsMatchHeadersAnyOfOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionsMatchHeadersAnyOfOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionsMatchHeadersAnyOfOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionsMatchHeadersAnyOfOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionsMatchHeadersAnyOfOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionsMatchHeadersAnyOfOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionsMatchHeadersAnyOfOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionsMatchHeadersAnyOfOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionsMatchHeadersAnyOfOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionsMatchHeadersAnyOfOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionsMatchHeadersAnyOfOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionsMatchHeadersAnyOfOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionsMatchHeadersAnyOfOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionsMatchHeadersAnyOfOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionsMatchHeadersAnyOfOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionsMatchHeadersAnyOfOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionsMatchHeadersAnyOfOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionsMatchHeadersAnyOfOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionsMatchHeadersAnyOfOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionsMatchHeadersAnyOfOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionsMatchHeadersAnyOfOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionsMatchHeadersAnyOfOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionsMatchHeadersAnyOfOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetHeader` <a name="resetHeader" id="@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionsMatchHeadersAnyOfOutputReference.resetHeader"></a>

```java
public void resetHeader()
```

##### `resetValueGlob` <a name="resetValueGlob" id="@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionsMatchHeadersAnyOfOutputReference.resetValueGlob"></a>

```java
public void resetValueGlob()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionsMatchHeadersAnyOfOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionsMatchHeadersAnyOfOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionsMatchHeadersAnyOfOutputReference.property.headerInput">headerInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionsMatchHeadersAnyOfOutputReference.property.valueGlobInput">valueGlobInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionsMatchHeadersAnyOfOutputReference.property.header">header</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionsMatchHeadersAnyOfOutputReference.property.valueGlob">valueGlob</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionsMatchHeadersAnyOfOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionsMatchHeadersAnyOf">Apigatewayv2RoutingRuleConditionsMatchHeadersAnyOf</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionsMatchHeadersAnyOfOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionsMatchHeadersAnyOfOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `headerInput`<sup>Optional</sup> <a name="headerInput" id="@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionsMatchHeadersAnyOfOutputReference.property.headerInput"></a>

```java
public java.lang.String getHeaderInput();
```

- *Type:* java.lang.String

---

##### `valueGlobInput`<sup>Optional</sup> <a name="valueGlobInput" id="@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionsMatchHeadersAnyOfOutputReference.property.valueGlobInput"></a>

```java
public java.lang.String getValueGlobInput();
```

- *Type:* java.lang.String

---

##### `header`<sup>Required</sup> <a name="header" id="@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionsMatchHeadersAnyOfOutputReference.property.header"></a>

```java
public java.lang.String getHeader();
```

- *Type:* java.lang.String

---

##### `valueGlob`<sup>Required</sup> <a name="valueGlob" id="@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionsMatchHeadersAnyOfOutputReference.property.valueGlob"></a>

```java
public java.lang.String getValueGlob();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionsMatchHeadersAnyOfOutputReference.property.internalValue"></a>

```java
public IResolvable|Apigatewayv2RoutingRuleConditionsMatchHeadersAnyOf getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionsMatchHeadersAnyOf">Apigatewayv2RoutingRuleConditionsMatchHeadersAnyOf</a>

---


### Apigatewayv2RoutingRuleConditionsMatchHeadersOutputReference <a name="Apigatewayv2RoutingRuleConditionsMatchHeadersOutputReference" id="@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionsMatchHeadersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionsMatchHeadersOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.apigatewayv2_routing_rule.Apigatewayv2RoutingRuleConditionsMatchHeadersOutputReference;

new Apigatewayv2RoutingRuleConditionsMatchHeadersOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionsMatchHeadersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionsMatchHeadersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionsMatchHeadersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionsMatchHeadersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionsMatchHeadersOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionsMatchHeadersOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionsMatchHeadersOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionsMatchHeadersOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionsMatchHeadersOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionsMatchHeadersOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionsMatchHeadersOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionsMatchHeadersOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionsMatchHeadersOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionsMatchHeadersOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionsMatchHeadersOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionsMatchHeadersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionsMatchHeadersOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionsMatchHeadersOutputReference.putAnyOf">putAnyOf</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionsMatchHeadersOutputReference.resetAnyOf">resetAnyOf</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionsMatchHeadersOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionsMatchHeadersOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionsMatchHeadersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionsMatchHeadersOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionsMatchHeadersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionsMatchHeadersOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionsMatchHeadersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionsMatchHeadersOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionsMatchHeadersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionsMatchHeadersOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionsMatchHeadersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionsMatchHeadersOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionsMatchHeadersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionsMatchHeadersOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionsMatchHeadersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionsMatchHeadersOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionsMatchHeadersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionsMatchHeadersOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionsMatchHeadersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionsMatchHeadersOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionsMatchHeadersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionsMatchHeadersOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionsMatchHeadersOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionsMatchHeadersOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putAnyOf` <a name="putAnyOf" id="@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionsMatchHeadersOutputReference.putAnyOf"></a>

```java
public void putAnyOf(IResolvable|java.util.List<Apigatewayv2RoutingRuleConditionsMatchHeadersAnyOf> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionsMatchHeadersOutputReference.putAnyOf.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionsMatchHeadersAnyOf">Apigatewayv2RoutingRuleConditionsMatchHeadersAnyOf</a>>

---

##### `resetAnyOf` <a name="resetAnyOf" id="@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionsMatchHeadersOutputReference.resetAnyOf"></a>

```java
public void resetAnyOf()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionsMatchHeadersOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionsMatchHeadersOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionsMatchHeadersOutputReference.property.anyOf">anyOf</a></code> | <code><a href="#@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionsMatchHeadersAnyOfList">Apigatewayv2RoutingRuleConditionsMatchHeadersAnyOfList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionsMatchHeadersOutputReference.property.anyOfInput">anyOfInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionsMatchHeadersAnyOf">Apigatewayv2RoutingRuleConditionsMatchHeadersAnyOf</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionsMatchHeadersOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionsMatchHeaders">Apigatewayv2RoutingRuleConditionsMatchHeaders</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionsMatchHeadersOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionsMatchHeadersOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `anyOf`<sup>Required</sup> <a name="anyOf" id="@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionsMatchHeadersOutputReference.property.anyOf"></a>

```java
public Apigatewayv2RoutingRuleConditionsMatchHeadersAnyOfList getAnyOf();
```

- *Type:* <a href="#@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionsMatchHeadersAnyOfList">Apigatewayv2RoutingRuleConditionsMatchHeadersAnyOfList</a>

---

##### `anyOfInput`<sup>Optional</sup> <a name="anyOfInput" id="@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionsMatchHeadersOutputReference.property.anyOfInput"></a>

```java
public IResolvable|java.util.List<Apigatewayv2RoutingRuleConditionsMatchHeadersAnyOf> getAnyOfInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionsMatchHeadersAnyOf">Apigatewayv2RoutingRuleConditionsMatchHeadersAnyOf</a>>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionsMatchHeadersOutputReference.property.internalValue"></a>

```java
public IResolvable|Apigatewayv2RoutingRuleConditionsMatchHeaders getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionsMatchHeaders">Apigatewayv2RoutingRuleConditionsMatchHeaders</a>

---


### Apigatewayv2RoutingRuleConditionsOutputReference <a name="Apigatewayv2RoutingRuleConditionsOutputReference" id="@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.apigatewayv2_routing_rule.Apigatewayv2RoutingRuleConditionsOutputReference;

new Apigatewayv2RoutingRuleConditionsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionsOutputReference.putMatchBasePaths">putMatchBasePaths</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionsOutputReference.putMatchHeaders">putMatchHeaders</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionsOutputReference.resetMatchBasePaths">resetMatchBasePaths</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionsOutputReference.resetMatchHeaders">resetMatchHeaders</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putMatchBasePaths` <a name="putMatchBasePaths" id="@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionsOutputReference.putMatchBasePaths"></a>

```java
public void putMatchBasePaths(Apigatewayv2RoutingRuleConditionsMatchBasePaths value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionsOutputReference.putMatchBasePaths.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionsMatchBasePaths">Apigatewayv2RoutingRuleConditionsMatchBasePaths</a>

---

##### `putMatchHeaders` <a name="putMatchHeaders" id="@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionsOutputReference.putMatchHeaders"></a>

```java
public void putMatchHeaders(Apigatewayv2RoutingRuleConditionsMatchHeaders value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionsOutputReference.putMatchHeaders.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionsMatchHeaders">Apigatewayv2RoutingRuleConditionsMatchHeaders</a>

---

##### `resetMatchBasePaths` <a name="resetMatchBasePaths" id="@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionsOutputReference.resetMatchBasePaths"></a>

```java
public void resetMatchBasePaths()
```

##### `resetMatchHeaders` <a name="resetMatchHeaders" id="@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionsOutputReference.resetMatchHeaders"></a>

```java
public void resetMatchHeaders()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionsOutputReference.property.matchBasePaths">matchBasePaths</a></code> | <code><a href="#@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionsMatchBasePathsOutputReference">Apigatewayv2RoutingRuleConditionsMatchBasePathsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionsOutputReference.property.matchHeaders">matchHeaders</a></code> | <code><a href="#@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionsMatchHeadersOutputReference">Apigatewayv2RoutingRuleConditionsMatchHeadersOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionsOutputReference.property.matchBasePathsInput">matchBasePathsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionsMatchBasePaths">Apigatewayv2RoutingRuleConditionsMatchBasePaths</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionsOutputReference.property.matchHeadersInput">matchHeadersInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionsMatchHeaders">Apigatewayv2RoutingRuleConditionsMatchHeaders</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditions">Apigatewayv2RoutingRuleConditions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `matchBasePaths`<sup>Required</sup> <a name="matchBasePaths" id="@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionsOutputReference.property.matchBasePaths"></a>

```java
public Apigatewayv2RoutingRuleConditionsMatchBasePathsOutputReference getMatchBasePaths();
```

- *Type:* <a href="#@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionsMatchBasePathsOutputReference">Apigatewayv2RoutingRuleConditionsMatchBasePathsOutputReference</a>

---

##### `matchHeaders`<sup>Required</sup> <a name="matchHeaders" id="@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionsOutputReference.property.matchHeaders"></a>

```java
public Apigatewayv2RoutingRuleConditionsMatchHeadersOutputReference getMatchHeaders();
```

- *Type:* <a href="#@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionsMatchHeadersOutputReference">Apigatewayv2RoutingRuleConditionsMatchHeadersOutputReference</a>

---

##### `matchBasePathsInput`<sup>Optional</sup> <a name="matchBasePathsInput" id="@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionsOutputReference.property.matchBasePathsInput"></a>

```java
public IResolvable|Apigatewayv2RoutingRuleConditionsMatchBasePaths getMatchBasePathsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionsMatchBasePaths">Apigatewayv2RoutingRuleConditionsMatchBasePaths</a>

---

##### `matchHeadersInput`<sup>Optional</sup> <a name="matchHeadersInput" id="@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionsOutputReference.property.matchHeadersInput"></a>

```java
public IResolvable|Apigatewayv2RoutingRuleConditionsMatchHeaders getMatchHeadersInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionsMatchHeaders">Apigatewayv2RoutingRuleConditionsMatchHeaders</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionsOutputReference.property.internalValue"></a>

```java
public IResolvable|Apigatewayv2RoutingRuleConditions getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditions">Apigatewayv2RoutingRuleConditions</a>

---



