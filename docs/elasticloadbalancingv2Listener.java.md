# `elasticloadbalancingv2Listener` Submodule <a name="`elasticloadbalancingv2Listener` Submodule" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### Elasticloadbalancingv2Listener <a name="Elasticloadbalancingv2Listener" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2Listener"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/elasticloadbalancingv2_listener awscc_elasticloadbalancingv2_listener}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2Listener.Initializer"></a>

```java
import io.cdktn.providers.awscc.elasticloadbalancingv2_listener.Elasticloadbalancingv2Listener;

Elasticloadbalancingv2Listener.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .defaultActions(IResolvable|java.util.List<Elasticloadbalancingv2ListenerDefaultActions>)
    .loadBalancerArn(java.lang.String)
//  .alpnPolicy(java.util.List<java.lang.String>)
//  .certificates(IResolvable|java.util.List<Elasticloadbalancingv2ListenerCertificates>)
//  .listenerAttributes(IResolvable|java.util.List<Elasticloadbalancingv2ListenerListenerAttributes>)
//  .mutualAuthentication(Elasticloadbalancingv2ListenerMutualAuthentication)
//  .port(java.lang.Number)
//  .protocol(java.lang.String)
//  .sslPolicy(java.lang.String)
//  .tags(IResolvable|java.util.List<Elasticloadbalancingv2ListenerTags>)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2Listener.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2Listener.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2Listener.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2Listener.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2Listener.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2Listener.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2Listener.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2Listener.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2Listener.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2Listener.Initializer.parameter.defaultActions">defaultActions</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActions">Elasticloadbalancingv2ListenerDefaultActions</a>></code> | The actions for the default rule. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2Listener.Initializer.parameter.loadBalancerArn">loadBalancerArn</a></code> | <code>java.lang.String</code> | The Amazon Resource Name (ARN) of the load balancer. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2Listener.Initializer.parameter.alpnPolicy">alpnPolicy</a></code> | <code>java.util.List<java.lang.String></code> | [TLS listener] The name of the Application-Layer Protocol Negotiation (ALPN) policy. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2Listener.Initializer.parameter.certificates">certificates</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerCertificates">Elasticloadbalancingv2ListenerCertificates</a>></code> | The default SSL server certificate for a secure listener. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2Listener.Initializer.parameter.listenerAttributes">listenerAttributes</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerListenerAttributes">Elasticloadbalancingv2ListenerListenerAttributes</a>></code> | The listener attributes. Attributes that you do not modify retain their current values. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2Listener.Initializer.parameter.mutualAuthentication">mutualAuthentication</a></code> | <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerMutualAuthentication">Elasticloadbalancingv2ListenerMutualAuthentication</a></code> | The mutual authentication configuration information. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2Listener.Initializer.parameter.port">port</a></code> | <code>java.lang.Number</code> | The port on which the load balancer is listening. You can't specify a port for a Gateway Load Balancer. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2Listener.Initializer.parameter.protocol">protocol</a></code> | <code>java.lang.String</code> | The protocol for connections from clients to the load balancer. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2Listener.Initializer.parameter.sslPolicy">sslPolicy</a></code> | <code>java.lang.String</code> | [HTTPS and TLS listeners] The security policy that defines which protocols and ciphers are supported. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2Listener.Initializer.parameter.tags">tags</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerTags">Elasticloadbalancingv2ListenerTags</a>></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/elasticloadbalancingv2_listener#tags Elasticloadbalancingv2Listener#tags}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2Listener.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2Listener.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2Listener.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2Listener.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2Listener.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2Listener.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2Listener.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2Listener.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2Listener.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `defaultActions`<sup>Required</sup> <a name="defaultActions" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2Listener.Initializer.parameter.defaultActions"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActions">Elasticloadbalancingv2ListenerDefaultActions</a>>

The actions for the default rule.

You cannot define a condition for a default rule.
To create additional rules for an Application Load Balancer, use [AWS::ElasticLoadBalancingV2::ListenerRule](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-elasticloadbalancingv2-listenerrule.html).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/elasticloadbalancingv2_listener#default_actions Elasticloadbalancingv2Listener#default_actions}

---

##### `loadBalancerArn`<sup>Required</sup> <a name="loadBalancerArn" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2Listener.Initializer.parameter.loadBalancerArn"></a>

- *Type:* java.lang.String

The Amazon Resource Name (ARN) of the load balancer.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/elasticloadbalancingv2_listener#load_balancer_arn Elasticloadbalancingv2Listener#load_balancer_arn}

---

##### `alpnPolicy`<sup>Optional</sup> <a name="alpnPolicy" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2Listener.Initializer.parameter.alpnPolicy"></a>

- *Type:* java.util.List<java.lang.String>

[TLS listener] The name of the Application-Layer Protocol Negotiation (ALPN) policy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/elasticloadbalancingv2_listener#alpn_policy Elasticloadbalancingv2Listener#alpn_policy}

---

##### `certificates`<sup>Optional</sup> <a name="certificates" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2Listener.Initializer.parameter.certificates"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerCertificates">Elasticloadbalancingv2ListenerCertificates</a>>

The default SSL server certificate for a secure listener.

You must provide exactly one certificate if the listener protocol is HTTPS or TLS.
For an HTTPS listener, update requires some interruptions. For a TLS listener, update requires no interruption.
To create a certificate list for a secure listener, use [AWS::ElasticLoadBalancingV2::ListenerCertificate](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-elasticloadbalancingv2-listenercertificate.html).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/elasticloadbalancingv2_listener#certificates Elasticloadbalancingv2Listener#certificates}

---

##### `listenerAttributes`<sup>Optional</sup> <a name="listenerAttributes" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2Listener.Initializer.parameter.listenerAttributes"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerListenerAttributes">Elasticloadbalancingv2ListenerListenerAttributes</a>>

The listener attributes. Attributes that you do not modify retain their current values.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/elasticloadbalancingv2_listener#listener_attributes Elasticloadbalancingv2Listener#listener_attributes}

---

##### `mutualAuthentication`<sup>Optional</sup> <a name="mutualAuthentication" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2Listener.Initializer.parameter.mutualAuthentication"></a>

- *Type:* <a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerMutualAuthentication">Elasticloadbalancingv2ListenerMutualAuthentication</a>

The mutual authentication configuration information.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/elasticloadbalancingv2_listener#mutual_authentication Elasticloadbalancingv2Listener#mutual_authentication}

---

##### `port`<sup>Optional</sup> <a name="port" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2Listener.Initializer.parameter.port"></a>

- *Type:* java.lang.Number

The port on which the load balancer is listening. You can't specify a port for a Gateway Load Balancer.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/elasticloadbalancingv2_listener#port Elasticloadbalancingv2Listener#port}

---

##### `protocol`<sup>Optional</sup> <a name="protocol" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2Listener.Initializer.parameter.protocol"></a>

- *Type:* java.lang.String

The protocol for connections from clients to the load balancer.

For Application Load Balancers, the supported protocols are HTTP and HTTPS. For Network Load Balancers, the supported protocols are TCP, TLS, UDP, TCP_UDP, QUIC, and TCP_QUIC. You can’t specify the UDP, TCP_UDP, QUIC, or TCP_QUIC protocol if dual-stack mode is enabled. You can't specify a protocol for a Gateway Load Balancer.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/elasticloadbalancingv2_listener#protocol Elasticloadbalancingv2Listener#protocol}

---

##### `sslPolicy`<sup>Optional</sup> <a name="sslPolicy" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2Listener.Initializer.parameter.sslPolicy"></a>

- *Type:* java.lang.String

[HTTPS and TLS listeners] The security policy that defines which protocols and ciphers are supported.

For more information, see [Security policies](https://docs.aws.amazon.com/elasticloadbalancing/latest/application/describe-ssl-policies.html) in the *Application Load Balancers Guide* and [Security policies](https://docs.aws.amazon.com/elasticloadbalancing/latest/network/describe-ssl-policies.html) in the *Network Load Balancers Guide*.
[HTTPS listeners] Updating the security policy can result in interruptions if the load balancer is handling a high volume of traffic. To decrease the possibility of an interruption if your load balancer is handling a high volume of traffic, create an additional load balancer or request an LCU reservation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/elasticloadbalancingv2_listener#ssl_policy Elasticloadbalancingv2Listener#ssl_policy}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2Listener.Initializer.parameter.tags"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerTags">Elasticloadbalancingv2ListenerTags</a>>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/elasticloadbalancingv2_listener#tags Elasticloadbalancingv2Listener#tags}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2Listener.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2Listener.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2Listener.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2Listener.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2Listener.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2Listener.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2Listener.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2Listener.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2Listener.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2Listener.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2Listener.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2Listener.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2Listener.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2Listener.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2Listener.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2Listener.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2Listener.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2Listener.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2Listener.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2Listener.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2Listener.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2Listener.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2Listener.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2Listener.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2Listener.putCertificates">putCertificates</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2Listener.putDefaultActions">putDefaultActions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2Listener.putListenerAttributes">putListenerAttributes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2Listener.putMutualAuthentication">putMutualAuthentication</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2Listener.putTags">putTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2Listener.resetAlpnPolicy">resetAlpnPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2Listener.resetCertificates">resetCertificates</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2Listener.resetListenerAttributes">resetListenerAttributes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2Listener.resetMutualAuthentication">resetMutualAuthentication</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2Listener.resetPort">resetPort</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2Listener.resetProtocol">resetProtocol</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2Listener.resetSslPolicy">resetSslPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2Listener.resetTags">resetTags</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2Listener.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2Listener.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2Listener.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2Listener.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2Listener.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2Listener.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2Listener.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2Listener.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2Listener.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2Listener.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2Listener.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2Listener.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2Listener.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2Listener.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2Listener.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2Listener.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2Listener.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2Listener.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2Listener.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2Listener.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2Listener.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2Listener.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2Listener.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2Listener.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2Listener.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2Listener.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2Listener.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2Listener.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2Listener.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2Listener.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2Listener.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2Listener.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2Listener.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2Listener.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2Listener.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2Listener.importFrom.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2Listener.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2Listener.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2Listener.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2Listener.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2Listener.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2Listener.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2Listener.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2Listener.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2Listener.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putCertificates` <a name="putCertificates" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2Listener.putCertificates"></a>

```java
public void putCertificates(IResolvable|java.util.List<Elasticloadbalancingv2ListenerCertificates> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2Listener.putCertificates.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerCertificates">Elasticloadbalancingv2ListenerCertificates</a>>

---

##### `putDefaultActions` <a name="putDefaultActions" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2Listener.putDefaultActions"></a>

```java
public void putDefaultActions(IResolvable|java.util.List<Elasticloadbalancingv2ListenerDefaultActions> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2Listener.putDefaultActions.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActions">Elasticloadbalancingv2ListenerDefaultActions</a>>

---

##### `putListenerAttributes` <a name="putListenerAttributes" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2Listener.putListenerAttributes"></a>

```java
public void putListenerAttributes(IResolvable|java.util.List<Elasticloadbalancingv2ListenerListenerAttributes> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2Listener.putListenerAttributes.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerListenerAttributes">Elasticloadbalancingv2ListenerListenerAttributes</a>>

---

##### `putMutualAuthentication` <a name="putMutualAuthentication" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2Listener.putMutualAuthentication"></a>

```java
public void putMutualAuthentication(Elasticloadbalancingv2ListenerMutualAuthentication value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2Listener.putMutualAuthentication.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerMutualAuthentication">Elasticloadbalancingv2ListenerMutualAuthentication</a>

---

##### `putTags` <a name="putTags" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2Listener.putTags"></a>

```java
public void putTags(IResolvable|java.util.List<Elasticloadbalancingv2ListenerTags> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2Listener.putTags.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerTags">Elasticloadbalancingv2ListenerTags</a>>

---

##### `resetAlpnPolicy` <a name="resetAlpnPolicy" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2Listener.resetAlpnPolicy"></a>

```java
public void resetAlpnPolicy()
```

##### `resetCertificates` <a name="resetCertificates" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2Listener.resetCertificates"></a>

```java
public void resetCertificates()
```

##### `resetListenerAttributes` <a name="resetListenerAttributes" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2Listener.resetListenerAttributes"></a>

```java
public void resetListenerAttributes()
```

##### `resetMutualAuthentication` <a name="resetMutualAuthentication" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2Listener.resetMutualAuthentication"></a>

```java
public void resetMutualAuthentication()
```

##### `resetPort` <a name="resetPort" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2Listener.resetPort"></a>

```java
public void resetPort()
```

##### `resetProtocol` <a name="resetProtocol" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2Listener.resetProtocol"></a>

```java
public void resetProtocol()
```

##### `resetSslPolicy` <a name="resetSslPolicy" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2Listener.resetSslPolicy"></a>

```java
public void resetSslPolicy()
```

##### `resetTags` <a name="resetTags" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2Listener.resetTags"></a>

```java
public void resetTags()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2Listener.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2Listener.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2Listener.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2Listener.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a Elasticloadbalancingv2Listener resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2Listener.isConstruct"></a>

```java
import io.cdktn.providers.awscc.elasticloadbalancingv2_listener.Elasticloadbalancingv2Listener;

Elasticloadbalancingv2Listener.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2Listener.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2Listener.isTerraformElement"></a>

```java
import io.cdktn.providers.awscc.elasticloadbalancingv2_listener.Elasticloadbalancingv2Listener;

Elasticloadbalancingv2Listener.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2Listener.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2Listener.isTerraformResource"></a>

```java
import io.cdktn.providers.awscc.elasticloadbalancingv2_listener.Elasticloadbalancingv2Listener;

Elasticloadbalancingv2Listener.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2Listener.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2Listener.generateConfigForImport"></a>

```java
import io.cdktn.providers.awscc.elasticloadbalancingv2_listener.Elasticloadbalancingv2Listener;

Elasticloadbalancingv2Listener.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),Elasticloadbalancingv2Listener.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a Elasticloadbalancingv2Listener resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2Listener.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2Listener.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the Elasticloadbalancingv2Listener to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2Listener.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing Elasticloadbalancingv2Listener that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/elasticloadbalancingv2_listener#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2Listener.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the Elasticloadbalancingv2Listener to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2Listener.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2Listener.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2Listener.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2Listener.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2Listener.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2Listener.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2Listener.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2Listener.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2Listener.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2Listener.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2Listener.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2Listener.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2Listener.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2Listener.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2Listener.property.certificates">certificates</a></code> | <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerCertificatesList">Elasticloadbalancingv2ListenerCertificatesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2Listener.property.defaultActions">defaultActions</a></code> | <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsList">Elasticloadbalancingv2ListenerDefaultActionsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2Listener.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2Listener.property.listenerArn">listenerArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2Listener.property.listenerAttributes">listenerAttributes</a></code> | <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerListenerAttributesList">Elasticloadbalancingv2ListenerListenerAttributesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2Listener.property.mutualAuthentication">mutualAuthentication</a></code> | <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerMutualAuthenticationOutputReference">Elasticloadbalancingv2ListenerMutualAuthenticationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2Listener.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerTagsList">Elasticloadbalancingv2ListenerTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2Listener.property.alpnPolicyInput">alpnPolicyInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2Listener.property.certificatesInput">certificatesInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerCertificates">Elasticloadbalancingv2ListenerCertificates</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2Listener.property.defaultActionsInput">defaultActionsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActions">Elasticloadbalancingv2ListenerDefaultActions</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2Listener.property.listenerAttributesInput">listenerAttributesInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerListenerAttributes">Elasticloadbalancingv2ListenerListenerAttributes</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2Listener.property.loadBalancerArnInput">loadBalancerArnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2Listener.property.mutualAuthenticationInput">mutualAuthenticationInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerMutualAuthentication">Elasticloadbalancingv2ListenerMutualAuthentication</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2Listener.property.portInput">portInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2Listener.property.protocolInput">protocolInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2Listener.property.sslPolicyInput">sslPolicyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2Listener.property.tagsInput">tagsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerTags">Elasticloadbalancingv2ListenerTags</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2Listener.property.alpnPolicy">alpnPolicy</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2Listener.property.loadBalancerArn">loadBalancerArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2Listener.property.port">port</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2Listener.property.protocol">protocol</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2Listener.property.sslPolicy">sslPolicy</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2Listener.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2Listener.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2Listener.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2Listener.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2Listener.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2Listener.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2Listener.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2Listener.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2Listener.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2Listener.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2Listener.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2Listener.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2Listener.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2Listener.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `certificates`<sup>Required</sup> <a name="certificates" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2Listener.property.certificates"></a>

```java
public Elasticloadbalancingv2ListenerCertificatesList getCertificates();
```

- *Type:* <a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerCertificatesList">Elasticloadbalancingv2ListenerCertificatesList</a>

---

##### `defaultActions`<sup>Required</sup> <a name="defaultActions" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2Listener.property.defaultActions"></a>

```java
public Elasticloadbalancingv2ListenerDefaultActionsList getDefaultActions();
```

- *Type:* <a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsList">Elasticloadbalancingv2ListenerDefaultActionsList</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2Listener.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `listenerArn`<sup>Required</sup> <a name="listenerArn" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2Listener.property.listenerArn"></a>

```java
public java.lang.String getListenerArn();
```

- *Type:* java.lang.String

---

##### `listenerAttributes`<sup>Required</sup> <a name="listenerAttributes" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2Listener.property.listenerAttributes"></a>

```java
public Elasticloadbalancingv2ListenerListenerAttributesList getListenerAttributes();
```

- *Type:* <a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerListenerAttributesList">Elasticloadbalancingv2ListenerListenerAttributesList</a>

---

##### `mutualAuthentication`<sup>Required</sup> <a name="mutualAuthentication" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2Listener.property.mutualAuthentication"></a>

```java
public Elasticloadbalancingv2ListenerMutualAuthenticationOutputReference getMutualAuthentication();
```

- *Type:* <a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerMutualAuthenticationOutputReference">Elasticloadbalancingv2ListenerMutualAuthenticationOutputReference</a>

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2Listener.property.tags"></a>

```java
public Elasticloadbalancingv2ListenerTagsList getTags();
```

- *Type:* <a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerTagsList">Elasticloadbalancingv2ListenerTagsList</a>

---

##### `alpnPolicyInput`<sup>Optional</sup> <a name="alpnPolicyInput" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2Listener.property.alpnPolicyInput"></a>

```java
public java.util.List<java.lang.String> getAlpnPolicyInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `certificatesInput`<sup>Optional</sup> <a name="certificatesInput" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2Listener.property.certificatesInput"></a>

```java
public IResolvable|java.util.List<Elasticloadbalancingv2ListenerCertificates> getCertificatesInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerCertificates">Elasticloadbalancingv2ListenerCertificates</a>>

---

##### `defaultActionsInput`<sup>Optional</sup> <a name="defaultActionsInput" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2Listener.property.defaultActionsInput"></a>

```java
public IResolvable|java.util.List<Elasticloadbalancingv2ListenerDefaultActions> getDefaultActionsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActions">Elasticloadbalancingv2ListenerDefaultActions</a>>

---

##### `listenerAttributesInput`<sup>Optional</sup> <a name="listenerAttributesInput" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2Listener.property.listenerAttributesInput"></a>

```java
public IResolvable|java.util.List<Elasticloadbalancingv2ListenerListenerAttributes> getListenerAttributesInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerListenerAttributes">Elasticloadbalancingv2ListenerListenerAttributes</a>>

---

##### `loadBalancerArnInput`<sup>Optional</sup> <a name="loadBalancerArnInput" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2Listener.property.loadBalancerArnInput"></a>

```java
public java.lang.String getLoadBalancerArnInput();
```

- *Type:* java.lang.String

---

##### `mutualAuthenticationInput`<sup>Optional</sup> <a name="mutualAuthenticationInput" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2Listener.property.mutualAuthenticationInput"></a>

```java
public IResolvable|Elasticloadbalancingv2ListenerMutualAuthentication getMutualAuthenticationInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerMutualAuthentication">Elasticloadbalancingv2ListenerMutualAuthentication</a>

---

##### `portInput`<sup>Optional</sup> <a name="portInput" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2Listener.property.portInput"></a>

```java
public java.lang.Number getPortInput();
```

- *Type:* java.lang.Number

---

##### `protocolInput`<sup>Optional</sup> <a name="protocolInput" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2Listener.property.protocolInput"></a>

```java
public java.lang.String getProtocolInput();
```

- *Type:* java.lang.String

---

##### `sslPolicyInput`<sup>Optional</sup> <a name="sslPolicyInput" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2Listener.property.sslPolicyInput"></a>

```java
public java.lang.String getSslPolicyInput();
```

- *Type:* java.lang.String

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2Listener.property.tagsInput"></a>

```java
public IResolvable|java.util.List<Elasticloadbalancingv2ListenerTags> getTagsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerTags">Elasticloadbalancingv2ListenerTags</a>>

---

##### `alpnPolicy`<sup>Required</sup> <a name="alpnPolicy" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2Listener.property.alpnPolicy"></a>

```java
public java.util.List<java.lang.String> getAlpnPolicy();
```

- *Type:* java.util.List<java.lang.String>

---

##### `loadBalancerArn`<sup>Required</sup> <a name="loadBalancerArn" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2Listener.property.loadBalancerArn"></a>

```java
public java.lang.String getLoadBalancerArn();
```

- *Type:* java.lang.String

---

##### `port`<sup>Required</sup> <a name="port" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2Listener.property.port"></a>

```java
public java.lang.Number getPort();
```

- *Type:* java.lang.Number

---

##### `protocol`<sup>Required</sup> <a name="protocol" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2Listener.property.protocol"></a>

```java
public java.lang.String getProtocol();
```

- *Type:* java.lang.String

---

##### `sslPolicy`<sup>Required</sup> <a name="sslPolicy" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2Listener.property.sslPolicy"></a>

```java
public java.lang.String getSslPolicy();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2Listener.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2Listener.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### Elasticloadbalancingv2ListenerCertificates <a name="Elasticloadbalancingv2ListenerCertificates" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerCertificates"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerCertificates.Initializer"></a>

```java
import io.cdktn.providers.awscc.elasticloadbalancingv2_listener.Elasticloadbalancingv2ListenerCertificates;

Elasticloadbalancingv2ListenerCertificates.builder()
//  .certificateArn(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerCertificates.property.certificateArn">certificateArn</a></code> | <code>java.lang.String</code> | The Amazon Resource Name (ARN) of the certificate. |

---

##### `certificateArn`<sup>Optional</sup> <a name="certificateArn" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerCertificates.property.certificateArn"></a>

```java
public java.lang.String getCertificateArn();
```

- *Type:* java.lang.String

The Amazon Resource Name (ARN) of the certificate.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/elasticloadbalancingv2_listener#certificate_arn Elasticloadbalancingv2Listener#certificate_arn}

---

### Elasticloadbalancingv2ListenerConfig <a name="Elasticloadbalancingv2ListenerConfig" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerConfig.Initializer"></a>

```java
import io.cdktn.providers.awscc.elasticloadbalancingv2_listener.Elasticloadbalancingv2ListenerConfig;

Elasticloadbalancingv2ListenerConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .defaultActions(IResolvable|java.util.List<Elasticloadbalancingv2ListenerDefaultActions>)
    .loadBalancerArn(java.lang.String)
//  .alpnPolicy(java.util.List<java.lang.String>)
//  .certificates(IResolvable|java.util.List<Elasticloadbalancingv2ListenerCertificates>)
//  .listenerAttributes(IResolvable|java.util.List<Elasticloadbalancingv2ListenerListenerAttributes>)
//  .mutualAuthentication(Elasticloadbalancingv2ListenerMutualAuthentication)
//  .port(java.lang.Number)
//  .protocol(java.lang.String)
//  .sslPolicy(java.lang.String)
//  .tags(IResolvable|java.util.List<Elasticloadbalancingv2ListenerTags>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerConfig.property.defaultActions">defaultActions</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActions">Elasticloadbalancingv2ListenerDefaultActions</a>></code> | The actions for the default rule. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerConfig.property.loadBalancerArn">loadBalancerArn</a></code> | <code>java.lang.String</code> | The Amazon Resource Name (ARN) of the load balancer. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerConfig.property.alpnPolicy">alpnPolicy</a></code> | <code>java.util.List<java.lang.String></code> | [TLS listener] The name of the Application-Layer Protocol Negotiation (ALPN) policy. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerConfig.property.certificates">certificates</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerCertificates">Elasticloadbalancingv2ListenerCertificates</a>></code> | The default SSL server certificate for a secure listener. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerConfig.property.listenerAttributes">listenerAttributes</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerListenerAttributes">Elasticloadbalancingv2ListenerListenerAttributes</a>></code> | The listener attributes. Attributes that you do not modify retain their current values. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerConfig.property.mutualAuthentication">mutualAuthentication</a></code> | <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerMutualAuthentication">Elasticloadbalancingv2ListenerMutualAuthentication</a></code> | The mutual authentication configuration information. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerConfig.property.port">port</a></code> | <code>java.lang.Number</code> | The port on which the load balancer is listening. You can't specify a port for a Gateway Load Balancer. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerConfig.property.protocol">protocol</a></code> | <code>java.lang.String</code> | The protocol for connections from clients to the load balancer. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerConfig.property.sslPolicy">sslPolicy</a></code> | <code>java.lang.String</code> | [HTTPS and TLS listeners] The security policy that defines which protocols and ciphers are supported. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerConfig.property.tags">tags</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerTags">Elasticloadbalancingv2ListenerTags</a>></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/elasticloadbalancingv2_listener#tags Elasticloadbalancingv2Listener#tags}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `defaultActions`<sup>Required</sup> <a name="defaultActions" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerConfig.property.defaultActions"></a>

```java
public IResolvable|java.util.List<Elasticloadbalancingv2ListenerDefaultActions> getDefaultActions();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActions">Elasticloadbalancingv2ListenerDefaultActions</a>>

The actions for the default rule.

You cannot define a condition for a default rule.
To create additional rules for an Application Load Balancer, use [AWS::ElasticLoadBalancingV2::ListenerRule](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-elasticloadbalancingv2-listenerrule.html).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/elasticloadbalancingv2_listener#default_actions Elasticloadbalancingv2Listener#default_actions}

---

##### `loadBalancerArn`<sup>Required</sup> <a name="loadBalancerArn" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerConfig.property.loadBalancerArn"></a>

```java
public java.lang.String getLoadBalancerArn();
```

- *Type:* java.lang.String

The Amazon Resource Name (ARN) of the load balancer.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/elasticloadbalancingv2_listener#load_balancer_arn Elasticloadbalancingv2Listener#load_balancer_arn}

---

##### `alpnPolicy`<sup>Optional</sup> <a name="alpnPolicy" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerConfig.property.alpnPolicy"></a>

```java
public java.util.List<java.lang.String> getAlpnPolicy();
```

- *Type:* java.util.List<java.lang.String>

[TLS listener] The name of the Application-Layer Protocol Negotiation (ALPN) policy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/elasticloadbalancingv2_listener#alpn_policy Elasticloadbalancingv2Listener#alpn_policy}

---

##### `certificates`<sup>Optional</sup> <a name="certificates" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerConfig.property.certificates"></a>

```java
public IResolvable|java.util.List<Elasticloadbalancingv2ListenerCertificates> getCertificates();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerCertificates">Elasticloadbalancingv2ListenerCertificates</a>>

The default SSL server certificate for a secure listener.

You must provide exactly one certificate if the listener protocol is HTTPS or TLS.
For an HTTPS listener, update requires some interruptions. For a TLS listener, update requires no interruption.
To create a certificate list for a secure listener, use [AWS::ElasticLoadBalancingV2::ListenerCertificate](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-elasticloadbalancingv2-listenercertificate.html).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/elasticloadbalancingv2_listener#certificates Elasticloadbalancingv2Listener#certificates}

---

##### `listenerAttributes`<sup>Optional</sup> <a name="listenerAttributes" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerConfig.property.listenerAttributes"></a>

```java
public IResolvable|java.util.List<Elasticloadbalancingv2ListenerListenerAttributes> getListenerAttributes();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerListenerAttributes">Elasticloadbalancingv2ListenerListenerAttributes</a>>

The listener attributes. Attributes that you do not modify retain their current values.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/elasticloadbalancingv2_listener#listener_attributes Elasticloadbalancingv2Listener#listener_attributes}

---

##### `mutualAuthentication`<sup>Optional</sup> <a name="mutualAuthentication" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerConfig.property.mutualAuthentication"></a>

```java
public Elasticloadbalancingv2ListenerMutualAuthentication getMutualAuthentication();
```

- *Type:* <a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerMutualAuthentication">Elasticloadbalancingv2ListenerMutualAuthentication</a>

The mutual authentication configuration information.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/elasticloadbalancingv2_listener#mutual_authentication Elasticloadbalancingv2Listener#mutual_authentication}

---

##### `port`<sup>Optional</sup> <a name="port" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerConfig.property.port"></a>

```java
public java.lang.Number getPort();
```

- *Type:* java.lang.Number

The port on which the load balancer is listening. You can't specify a port for a Gateway Load Balancer.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/elasticloadbalancingv2_listener#port Elasticloadbalancingv2Listener#port}

---

##### `protocol`<sup>Optional</sup> <a name="protocol" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerConfig.property.protocol"></a>

```java
public java.lang.String getProtocol();
```

- *Type:* java.lang.String

The protocol for connections from clients to the load balancer.

For Application Load Balancers, the supported protocols are HTTP and HTTPS. For Network Load Balancers, the supported protocols are TCP, TLS, UDP, TCP_UDP, QUIC, and TCP_QUIC. You can’t specify the UDP, TCP_UDP, QUIC, or TCP_QUIC protocol if dual-stack mode is enabled. You can't specify a protocol for a Gateway Load Balancer.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/elasticloadbalancingv2_listener#protocol Elasticloadbalancingv2Listener#protocol}

---

##### `sslPolicy`<sup>Optional</sup> <a name="sslPolicy" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerConfig.property.sslPolicy"></a>

```java
public java.lang.String getSslPolicy();
```

- *Type:* java.lang.String

[HTTPS and TLS listeners] The security policy that defines which protocols and ciphers are supported.

For more information, see [Security policies](https://docs.aws.amazon.com/elasticloadbalancing/latest/application/describe-ssl-policies.html) in the *Application Load Balancers Guide* and [Security policies](https://docs.aws.amazon.com/elasticloadbalancing/latest/network/describe-ssl-policies.html) in the *Network Load Balancers Guide*.
[HTTPS listeners] Updating the security policy can result in interruptions if the load balancer is handling a high volume of traffic. To decrease the possibility of an interruption if your load balancer is handling a high volume of traffic, create an additional load balancer or request an LCU reservation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/elasticloadbalancingv2_listener#ssl_policy Elasticloadbalancingv2Listener#ssl_policy}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerConfig.property.tags"></a>

```java
public IResolvable|java.util.List<Elasticloadbalancingv2ListenerTags> getTags();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerTags">Elasticloadbalancingv2ListenerTags</a>>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/elasticloadbalancingv2_listener#tags Elasticloadbalancingv2Listener#tags}.

---

### Elasticloadbalancingv2ListenerDefaultActions <a name="Elasticloadbalancingv2ListenerDefaultActions" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActions.Initializer"></a>

```java
import io.cdktn.providers.awscc.elasticloadbalancingv2_listener.Elasticloadbalancingv2ListenerDefaultActions;

Elasticloadbalancingv2ListenerDefaultActions.builder()
    .type(java.lang.String)
//  .authenticateCognitoConfig(Elasticloadbalancingv2ListenerDefaultActionsAuthenticateCognitoConfig)
//  .authenticateOidcConfig(Elasticloadbalancingv2ListenerDefaultActionsAuthenticateOidcConfig)
//  .fixedResponseConfig(Elasticloadbalancingv2ListenerDefaultActionsFixedResponseConfig)
//  .forwardConfig(Elasticloadbalancingv2ListenerDefaultActionsForwardConfig)
//  .jwtValidationConfig(Elasticloadbalancingv2ListenerDefaultActionsJwtValidationConfig)
//  .order(java.lang.Number)
//  .redirectConfig(Elasticloadbalancingv2ListenerDefaultActionsRedirectConfig)
//  .targetGroupArn(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActions.property.type">type</a></code> | <code>java.lang.String</code> | The type of action. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActions.property.authenticateCognitoConfig">authenticateCognitoConfig</a></code> | <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsAuthenticateCognitoConfig">Elasticloadbalancingv2ListenerDefaultActionsAuthenticateCognitoConfig</a></code> | [HTTPS listeners] Information for using Amazon Cognito to authenticate users. Specify only when ``Type`` is ``authenticate-cognito``. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActions.property.authenticateOidcConfig">authenticateOidcConfig</a></code> | <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsAuthenticateOidcConfig">Elasticloadbalancingv2ListenerDefaultActionsAuthenticateOidcConfig</a></code> | [HTTPS listeners] Information about an identity provider that is compliant with OpenID Connect (OIDC). |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActions.property.fixedResponseConfig">fixedResponseConfig</a></code> | <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsFixedResponseConfig">Elasticloadbalancingv2ListenerDefaultActionsFixedResponseConfig</a></code> | [Application Load Balancer] Information for creating an action that returns a custom HTTP response. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActions.property.forwardConfig">forwardConfig</a></code> | <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsForwardConfig">Elasticloadbalancingv2ListenerDefaultActionsForwardConfig</a></code> | Information for creating an action that distributes requests among multiple target groups. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActions.property.jwtValidationConfig">jwtValidationConfig</a></code> | <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsJwtValidationConfig">Elasticloadbalancingv2ListenerDefaultActionsJwtValidationConfig</a></code> | [HTTPS listeners] Information for validating JWT access tokens in client requests. Specify only when ``Type`` is ``jwt-validation``. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActions.property.order">order</a></code> | <code>java.lang.Number</code> | The order for the action. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActions.property.redirectConfig">redirectConfig</a></code> | <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsRedirectConfig">Elasticloadbalancingv2ListenerDefaultActionsRedirectConfig</a></code> | [Application Load Balancer] Information for creating a redirect action. Specify only when ``Type`` is ``redirect``. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActions.property.targetGroupArn">targetGroupArn</a></code> | <code>java.lang.String</code> | The Amazon Resource Name (ARN) of the target group. |

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActions.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

The type of action.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/elasticloadbalancingv2_listener#type Elasticloadbalancingv2Listener#type}

---

##### `authenticateCognitoConfig`<sup>Optional</sup> <a name="authenticateCognitoConfig" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActions.property.authenticateCognitoConfig"></a>

```java
public Elasticloadbalancingv2ListenerDefaultActionsAuthenticateCognitoConfig getAuthenticateCognitoConfig();
```

- *Type:* <a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsAuthenticateCognitoConfig">Elasticloadbalancingv2ListenerDefaultActionsAuthenticateCognitoConfig</a>

[HTTPS listeners] Information for using Amazon Cognito to authenticate users. Specify only when ``Type`` is ``authenticate-cognito``.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/elasticloadbalancingv2_listener#authenticate_cognito_config Elasticloadbalancingv2Listener#authenticate_cognito_config}

---

##### `authenticateOidcConfig`<sup>Optional</sup> <a name="authenticateOidcConfig" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActions.property.authenticateOidcConfig"></a>

```java
public Elasticloadbalancingv2ListenerDefaultActionsAuthenticateOidcConfig getAuthenticateOidcConfig();
```

- *Type:* <a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsAuthenticateOidcConfig">Elasticloadbalancingv2ListenerDefaultActionsAuthenticateOidcConfig</a>

[HTTPS listeners] Information about an identity provider that is compliant with OpenID Connect (OIDC).

Specify only when `Type` is `authenticate-oidc`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/elasticloadbalancingv2_listener#authenticate_oidc_config Elasticloadbalancingv2Listener#authenticate_oidc_config}

---

##### `fixedResponseConfig`<sup>Optional</sup> <a name="fixedResponseConfig" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActions.property.fixedResponseConfig"></a>

```java
public Elasticloadbalancingv2ListenerDefaultActionsFixedResponseConfig getFixedResponseConfig();
```

- *Type:* <a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsFixedResponseConfig">Elasticloadbalancingv2ListenerDefaultActionsFixedResponseConfig</a>

[Application Load Balancer] Information for creating an action that returns a custom HTTP response.

Specify only when `Type` is `fixed-response`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/elasticloadbalancingv2_listener#fixed_response_config Elasticloadbalancingv2Listener#fixed_response_config}

---

##### `forwardConfig`<sup>Optional</sup> <a name="forwardConfig" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActions.property.forwardConfig"></a>

```java
public Elasticloadbalancingv2ListenerDefaultActionsForwardConfig getForwardConfig();
```

- *Type:* <a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsForwardConfig">Elasticloadbalancingv2ListenerDefaultActionsForwardConfig</a>

Information for creating an action that distributes requests among multiple target groups.

Specify only when `Type` is `forward`.
If you specify both `ForwardConfig` and `TargetGroupArn`, you can specify only one target group using `ForwardConfig` and it must be the same target group specified in `TargetGroupArn`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/elasticloadbalancingv2_listener#forward_config Elasticloadbalancingv2Listener#forward_config}

---

##### `jwtValidationConfig`<sup>Optional</sup> <a name="jwtValidationConfig" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActions.property.jwtValidationConfig"></a>

```java
public Elasticloadbalancingv2ListenerDefaultActionsJwtValidationConfig getJwtValidationConfig();
```

- *Type:* <a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsJwtValidationConfig">Elasticloadbalancingv2ListenerDefaultActionsJwtValidationConfig</a>

[HTTPS listeners] Information for validating JWT access tokens in client requests. Specify only when ``Type`` is ``jwt-validation``.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/elasticloadbalancingv2_listener#jwt_validation_config Elasticloadbalancingv2Listener#jwt_validation_config}

---

##### `order`<sup>Optional</sup> <a name="order" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActions.property.order"></a>

```java
public java.lang.Number getOrder();
```

- *Type:* java.lang.Number

The order for the action.

This value is required for rules with multiple actions. The action with the lowest value for order is performed first.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/elasticloadbalancingv2_listener#order Elasticloadbalancingv2Listener#order}

---

##### `redirectConfig`<sup>Optional</sup> <a name="redirectConfig" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActions.property.redirectConfig"></a>

```java
public Elasticloadbalancingv2ListenerDefaultActionsRedirectConfig getRedirectConfig();
```

- *Type:* <a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsRedirectConfig">Elasticloadbalancingv2ListenerDefaultActionsRedirectConfig</a>

[Application Load Balancer] Information for creating a redirect action. Specify only when ``Type`` is ``redirect``.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/elasticloadbalancingv2_listener#redirect_config Elasticloadbalancingv2Listener#redirect_config}

---

##### `targetGroupArn`<sup>Optional</sup> <a name="targetGroupArn" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActions.property.targetGroupArn"></a>

```java
public java.lang.String getTargetGroupArn();
```

- *Type:* java.lang.String

The Amazon Resource Name (ARN) of the target group.

Specify only when `Type` is `forward` and you want to route to a single target group. To route to multiple target groups, you must use `ForwardConfig` instead.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/elasticloadbalancingv2_listener#target_group_arn Elasticloadbalancingv2Listener#target_group_arn}

---

### Elasticloadbalancingv2ListenerDefaultActionsAuthenticateCognitoConfig <a name="Elasticloadbalancingv2ListenerDefaultActionsAuthenticateCognitoConfig" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsAuthenticateCognitoConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsAuthenticateCognitoConfig.Initializer"></a>

```java
import io.cdktn.providers.awscc.elasticloadbalancingv2_listener.Elasticloadbalancingv2ListenerDefaultActionsAuthenticateCognitoConfig;

Elasticloadbalancingv2ListenerDefaultActionsAuthenticateCognitoConfig.builder()
//  .authenticationRequestExtraParams(java.util.Map<java.lang.String, java.lang.String>)
//  .onUnauthenticatedRequest(java.lang.String)
//  .scope(java.lang.String)
//  .sessionCookieName(java.lang.String)
//  .sessionTimeout(java.lang.String)
//  .userPoolArn(java.lang.String)
//  .userPoolClientId(java.lang.String)
//  .userPoolDomain(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsAuthenticateCognitoConfig.property.authenticationRequestExtraParams">authenticationRequestExtraParams</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | The query parameters (up to 10) to include in the redirect request to the authorization endpoint. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsAuthenticateCognitoConfig.property.onUnauthenticatedRequest">onUnauthenticatedRequest</a></code> | <code>java.lang.String</code> | The behavior if the user is not authenticated. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsAuthenticateCognitoConfig.property.scope">scope</a></code> | <code>java.lang.String</code> | The set of user claims to be requested from the IdP. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsAuthenticateCognitoConfig.property.sessionCookieName">sessionCookieName</a></code> | <code>java.lang.String</code> | The name of the cookie used to maintain session information. The default is AWSELBAuthSessionCookie. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsAuthenticateCognitoConfig.property.sessionTimeout">sessionTimeout</a></code> | <code>java.lang.String</code> | The maximum duration of the authentication session, in seconds. The default is 604800 seconds (7 days). |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsAuthenticateCognitoConfig.property.userPoolArn">userPoolArn</a></code> | <code>java.lang.String</code> | The Amazon Resource Name (ARN) of the Amazon Cognito user pool. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsAuthenticateCognitoConfig.property.userPoolClientId">userPoolClientId</a></code> | <code>java.lang.String</code> | The ID of the Amazon Cognito user pool client. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsAuthenticateCognitoConfig.property.userPoolDomain">userPoolDomain</a></code> | <code>java.lang.String</code> | The domain prefix or fully-qualified domain name of the Amazon Cognito user pool. |

---

##### `authenticationRequestExtraParams`<sup>Optional</sup> <a name="authenticationRequestExtraParams" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsAuthenticateCognitoConfig.property.authenticationRequestExtraParams"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getAuthenticationRequestExtraParams();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

The query parameters (up to 10) to include in the redirect request to the authorization endpoint.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/elasticloadbalancingv2_listener#authentication_request_extra_params Elasticloadbalancingv2Listener#authentication_request_extra_params}

---

##### `onUnauthenticatedRequest`<sup>Optional</sup> <a name="onUnauthenticatedRequest" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsAuthenticateCognitoConfig.property.onUnauthenticatedRequest"></a>

```java
public java.lang.String getOnUnauthenticatedRequest();
```

- *Type:* java.lang.String

The behavior if the user is not authenticated.

The following are possible values:

* deny```` - Return an HTTP 401 Unauthorized error.
* allow```` - Allow the request to be forwarded to the target.
* authenticate```` - Redirect the request to the IdP authorization endpoint. This is the default value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/elasticloadbalancingv2_listener#on_unauthenticated_request Elasticloadbalancingv2Listener#on_unauthenticated_request}

---

##### `scope`<sup>Optional</sup> <a name="scope" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsAuthenticateCognitoConfig.property.scope"></a>

```java
public java.lang.String getScope();
```

- *Type:* java.lang.String

The set of user claims to be requested from the IdP.

The default is `openid`.
To verify which scope values your IdP supports and how to separate multiple values, see the documentation for your IdP.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/elasticloadbalancingv2_listener#scope Elasticloadbalancingv2Listener#scope}

---

##### `sessionCookieName`<sup>Optional</sup> <a name="sessionCookieName" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsAuthenticateCognitoConfig.property.sessionCookieName"></a>

```java
public java.lang.String getSessionCookieName();
```

- *Type:* java.lang.String

The name of the cookie used to maintain session information. The default is AWSELBAuthSessionCookie.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/elasticloadbalancingv2_listener#session_cookie_name Elasticloadbalancingv2Listener#session_cookie_name}

---

##### `sessionTimeout`<sup>Optional</sup> <a name="sessionTimeout" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsAuthenticateCognitoConfig.property.sessionTimeout"></a>

```java
public java.lang.String getSessionTimeout();
```

- *Type:* java.lang.String

The maximum duration of the authentication session, in seconds. The default is 604800 seconds (7 days).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/elasticloadbalancingv2_listener#session_timeout Elasticloadbalancingv2Listener#session_timeout}

---

##### `userPoolArn`<sup>Optional</sup> <a name="userPoolArn" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsAuthenticateCognitoConfig.property.userPoolArn"></a>

```java
public java.lang.String getUserPoolArn();
```

- *Type:* java.lang.String

The Amazon Resource Name (ARN) of the Amazon Cognito user pool.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/elasticloadbalancingv2_listener#user_pool_arn Elasticloadbalancingv2Listener#user_pool_arn}

---

##### `userPoolClientId`<sup>Optional</sup> <a name="userPoolClientId" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsAuthenticateCognitoConfig.property.userPoolClientId"></a>

```java
public java.lang.String getUserPoolClientId();
```

- *Type:* java.lang.String

The ID of the Amazon Cognito user pool client.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/elasticloadbalancingv2_listener#user_pool_client_id Elasticloadbalancingv2Listener#user_pool_client_id}

---

##### `userPoolDomain`<sup>Optional</sup> <a name="userPoolDomain" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsAuthenticateCognitoConfig.property.userPoolDomain"></a>

```java
public java.lang.String getUserPoolDomain();
```

- *Type:* java.lang.String

The domain prefix or fully-qualified domain name of the Amazon Cognito user pool.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/elasticloadbalancingv2_listener#user_pool_domain Elasticloadbalancingv2Listener#user_pool_domain}

---

### Elasticloadbalancingv2ListenerDefaultActionsAuthenticateOidcConfig <a name="Elasticloadbalancingv2ListenerDefaultActionsAuthenticateOidcConfig" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsAuthenticateOidcConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsAuthenticateOidcConfig.Initializer"></a>

```java
import io.cdktn.providers.awscc.elasticloadbalancingv2_listener.Elasticloadbalancingv2ListenerDefaultActionsAuthenticateOidcConfig;

Elasticloadbalancingv2ListenerDefaultActionsAuthenticateOidcConfig.builder()
//  .authenticationRequestExtraParams(java.util.Map<java.lang.String, java.lang.String>)
//  .authorizationEndpoint(java.lang.String)
//  .clientId(java.lang.String)
//  .clientSecret(java.lang.String)
//  .issuer(java.lang.String)
//  .onUnauthenticatedRequest(java.lang.String)
//  .scope(java.lang.String)
//  .sessionCookieName(java.lang.String)
//  .sessionTimeout(java.lang.String)
//  .tokenEndpoint(java.lang.String)
//  .useExistingClientSecret(java.lang.Boolean|IResolvable)
//  .userInfoEndpoint(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsAuthenticateOidcConfig.property.authenticationRequestExtraParams">authenticationRequestExtraParams</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | The query parameters (up to 10) to include in the redirect request to the authorization endpoint. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsAuthenticateOidcConfig.property.authorizationEndpoint">authorizationEndpoint</a></code> | <code>java.lang.String</code> | The authorization endpoint of the IdP. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsAuthenticateOidcConfig.property.clientId">clientId</a></code> | <code>java.lang.String</code> | The OAuth 2.0 client identifier. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsAuthenticateOidcConfig.property.clientSecret">clientSecret</a></code> | <code>java.lang.String</code> | The OAuth 2.0 client secret. This parameter is required if you are creating a rule. If you are modifying a rule, you can omit this parameter if you set ``UseExistingClientSecret`` to true. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsAuthenticateOidcConfig.property.issuer">issuer</a></code> | <code>java.lang.String</code> | The OIDC issuer identifier of the IdP. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsAuthenticateOidcConfig.property.onUnauthenticatedRequest">onUnauthenticatedRequest</a></code> | <code>java.lang.String</code> | The behavior if the user is not authenticated. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsAuthenticateOidcConfig.property.scope">scope</a></code> | <code>java.lang.String</code> | The set of user claims to be requested from the IdP. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsAuthenticateOidcConfig.property.sessionCookieName">sessionCookieName</a></code> | <code>java.lang.String</code> | The name of the cookie used to maintain session information. The default is AWSELBAuthSessionCookie. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsAuthenticateOidcConfig.property.sessionTimeout">sessionTimeout</a></code> | <code>java.lang.String</code> | The maximum duration of the authentication session, in seconds. The default is 604800 seconds (7 days). |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsAuthenticateOidcConfig.property.tokenEndpoint">tokenEndpoint</a></code> | <code>java.lang.String</code> | The token endpoint of the IdP. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsAuthenticateOidcConfig.property.useExistingClientSecret">useExistingClientSecret</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Indicates whether to use the existing client secret when modifying a rule. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsAuthenticateOidcConfig.property.userInfoEndpoint">userInfoEndpoint</a></code> | <code>java.lang.String</code> | The user info endpoint of the IdP. |

---

##### `authenticationRequestExtraParams`<sup>Optional</sup> <a name="authenticationRequestExtraParams" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsAuthenticateOidcConfig.property.authenticationRequestExtraParams"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getAuthenticationRequestExtraParams();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

The query parameters (up to 10) to include in the redirect request to the authorization endpoint.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/elasticloadbalancingv2_listener#authentication_request_extra_params Elasticloadbalancingv2Listener#authentication_request_extra_params}

---

##### `authorizationEndpoint`<sup>Optional</sup> <a name="authorizationEndpoint" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsAuthenticateOidcConfig.property.authorizationEndpoint"></a>

```java
public java.lang.String getAuthorizationEndpoint();
```

- *Type:* java.lang.String

The authorization endpoint of the IdP.

This must be a full URL, including the HTTPS protocol, the domain, and the path.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/elasticloadbalancingv2_listener#authorization_endpoint Elasticloadbalancingv2Listener#authorization_endpoint}

---

##### `clientId`<sup>Optional</sup> <a name="clientId" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsAuthenticateOidcConfig.property.clientId"></a>

```java
public java.lang.String getClientId();
```

- *Type:* java.lang.String

The OAuth 2.0 client identifier.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/elasticloadbalancingv2_listener#client_id Elasticloadbalancingv2Listener#client_id}

---

##### `clientSecret`<sup>Optional</sup> <a name="clientSecret" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsAuthenticateOidcConfig.property.clientSecret"></a>

```java
public java.lang.String getClientSecret();
```

- *Type:* java.lang.String

The OAuth 2.0 client secret. This parameter is required if you are creating a rule. If you are modifying a rule, you can omit this parameter if you set ``UseExistingClientSecret`` to true.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/elasticloadbalancingv2_listener#client_secret Elasticloadbalancingv2Listener#client_secret}

---

##### `issuer`<sup>Optional</sup> <a name="issuer" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsAuthenticateOidcConfig.property.issuer"></a>

```java
public java.lang.String getIssuer();
```

- *Type:* java.lang.String

The OIDC issuer identifier of the IdP.

This must be a full URL, including the HTTPS protocol, the domain, and the path.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/elasticloadbalancingv2_listener#issuer Elasticloadbalancingv2Listener#issuer}

---

##### `onUnauthenticatedRequest`<sup>Optional</sup> <a name="onUnauthenticatedRequest" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsAuthenticateOidcConfig.property.onUnauthenticatedRequest"></a>

```java
public java.lang.String getOnUnauthenticatedRequest();
```

- *Type:* java.lang.String

The behavior if the user is not authenticated.

The following are possible values:

* deny```` - Return an HTTP 401 Unauthorized error.
* allow```` - Allow the request to be forwarded to the target.
* authenticate```` - Redirect the request to the IdP authorization endpoint. This is the default value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/elasticloadbalancingv2_listener#on_unauthenticated_request Elasticloadbalancingv2Listener#on_unauthenticated_request}

---

##### `scope`<sup>Optional</sup> <a name="scope" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsAuthenticateOidcConfig.property.scope"></a>

```java
public java.lang.String getScope();
```

- *Type:* java.lang.String

The set of user claims to be requested from the IdP.

The default is `openid`.
To verify which scope values your IdP supports and how to separate multiple values, see the documentation for your IdP.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/elasticloadbalancingv2_listener#scope Elasticloadbalancingv2Listener#scope}

---

##### `sessionCookieName`<sup>Optional</sup> <a name="sessionCookieName" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsAuthenticateOidcConfig.property.sessionCookieName"></a>

```java
public java.lang.String getSessionCookieName();
```

- *Type:* java.lang.String

The name of the cookie used to maintain session information. The default is AWSELBAuthSessionCookie.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/elasticloadbalancingv2_listener#session_cookie_name Elasticloadbalancingv2Listener#session_cookie_name}

---

##### `sessionTimeout`<sup>Optional</sup> <a name="sessionTimeout" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsAuthenticateOidcConfig.property.sessionTimeout"></a>

```java
public java.lang.String getSessionTimeout();
```

- *Type:* java.lang.String

The maximum duration of the authentication session, in seconds. The default is 604800 seconds (7 days).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/elasticloadbalancingv2_listener#session_timeout Elasticloadbalancingv2Listener#session_timeout}

---

##### `tokenEndpoint`<sup>Optional</sup> <a name="tokenEndpoint" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsAuthenticateOidcConfig.property.tokenEndpoint"></a>

```java
public java.lang.String getTokenEndpoint();
```

- *Type:* java.lang.String

The token endpoint of the IdP.

This must be a full URL, including the HTTPS protocol, the domain, and the path.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/elasticloadbalancingv2_listener#token_endpoint Elasticloadbalancingv2Listener#token_endpoint}

---

##### `useExistingClientSecret`<sup>Optional</sup> <a name="useExistingClientSecret" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsAuthenticateOidcConfig.property.useExistingClientSecret"></a>

```java
public java.lang.Boolean|IResolvable getUseExistingClientSecret();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Indicates whether to use the existing client secret when modifying a rule.

If you are creating a rule, you can omit this parameter or set it to false.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/elasticloadbalancingv2_listener#use_existing_client_secret Elasticloadbalancingv2Listener#use_existing_client_secret}

---

##### `userInfoEndpoint`<sup>Optional</sup> <a name="userInfoEndpoint" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsAuthenticateOidcConfig.property.userInfoEndpoint"></a>

```java
public java.lang.String getUserInfoEndpoint();
```

- *Type:* java.lang.String

The user info endpoint of the IdP.

This must be a full URL, including the HTTPS protocol, the domain, and the path.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/elasticloadbalancingv2_listener#user_info_endpoint Elasticloadbalancingv2Listener#user_info_endpoint}

---

### Elasticloadbalancingv2ListenerDefaultActionsFixedResponseConfig <a name="Elasticloadbalancingv2ListenerDefaultActionsFixedResponseConfig" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsFixedResponseConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsFixedResponseConfig.Initializer"></a>

```java
import io.cdktn.providers.awscc.elasticloadbalancingv2_listener.Elasticloadbalancingv2ListenerDefaultActionsFixedResponseConfig;

Elasticloadbalancingv2ListenerDefaultActionsFixedResponseConfig.builder()
//  .contentType(java.lang.String)
//  .messageBody(java.lang.String)
//  .statusCode(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsFixedResponseConfig.property.contentType">contentType</a></code> | <code>java.lang.String</code> | The content type.  Valid Values: text/plain \| text/css \| text/html \| application/javascript \| application/json. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsFixedResponseConfig.property.messageBody">messageBody</a></code> | <code>java.lang.String</code> | The message. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsFixedResponseConfig.property.statusCode">statusCode</a></code> | <code>java.lang.String</code> | The HTTP response code (2XX, 4XX, or 5XX). |

---

##### `contentType`<sup>Optional</sup> <a name="contentType" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsFixedResponseConfig.property.contentType"></a>

```java
public java.lang.String getContentType();
```

- *Type:* java.lang.String

The content type.  Valid Values: text/plain | text/css | text/html | application/javascript | application/json.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/elasticloadbalancingv2_listener#content_type Elasticloadbalancingv2Listener#content_type}

---

##### `messageBody`<sup>Optional</sup> <a name="messageBody" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsFixedResponseConfig.property.messageBody"></a>

```java
public java.lang.String getMessageBody();
```

- *Type:* java.lang.String

The message.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/elasticloadbalancingv2_listener#message_body Elasticloadbalancingv2Listener#message_body}

---

##### `statusCode`<sup>Optional</sup> <a name="statusCode" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsFixedResponseConfig.property.statusCode"></a>

```java
public java.lang.String getStatusCode();
```

- *Type:* java.lang.String

The HTTP response code (2XX, 4XX, or 5XX).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/elasticloadbalancingv2_listener#status_code Elasticloadbalancingv2Listener#status_code}

---

### Elasticloadbalancingv2ListenerDefaultActionsForwardConfig <a name="Elasticloadbalancingv2ListenerDefaultActionsForwardConfig" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsForwardConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsForwardConfig.Initializer"></a>

```java
import io.cdktn.providers.awscc.elasticloadbalancingv2_listener.Elasticloadbalancingv2ListenerDefaultActionsForwardConfig;

Elasticloadbalancingv2ListenerDefaultActionsForwardConfig.builder()
//  .targetGroups(IResolvable|java.util.List<Elasticloadbalancingv2ListenerDefaultActionsForwardConfigTargetGroups>)
//  .targetGroupStickinessConfig(Elasticloadbalancingv2ListenerDefaultActionsForwardConfigTargetGroupStickinessConfig)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsForwardConfig.property.targetGroups">targetGroups</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsForwardConfigTargetGroups">Elasticloadbalancingv2ListenerDefaultActionsForwardConfigTargetGroups</a>></code> | Information about how traffic will be distributed between multiple target groups in a forward rule. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsForwardConfig.property.targetGroupStickinessConfig">targetGroupStickinessConfig</a></code> | <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsForwardConfigTargetGroupStickinessConfig">Elasticloadbalancingv2ListenerDefaultActionsForwardConfigTargetGroupStickinessConfig</a></code> | Information about the target group stickiness for a rule. |

---

##### `targetGroups`<sup>Optional</sup> <a name="targetGroups" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsForwardConfig.property.targetGroups"></a>

```java
public IResolvable|java.util.List<Elasticloadbalancingv2ListenerDefaultActionsForwardConfigTargetGroups> getTargetGroups();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsForwardConfigTargetGroups">Elasticloadbalancingv2ListenerDefaultActionsForwardConfigTargetGroups</a>>

Information about how traffic will be distributed between multiple target groups in a forward rule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/elasticloadbalancingv2_listener#target_groups Elasticloadbalancingv2Listener#target_groups}

---

##### `targetGroupStickinessConfig`<sup>Optional</sup> <a name="targetGroupStickinessConfig" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsForwardConfig.property.targetGroupStickinessConfig"></a>

```java
public Elasticloadbalancingv2ListenerDefaultActionsForwardConfigTargetGroupStickinessConfig getTargetGroupStickinessConfig();
```

- *Type:* <a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsForwardConfigTargetGroupStickinessConfig">Elasticloadbalancingv2ListenerDefaultActionsForwardConfigTargetGroupStickinessConfig</a>

Information about the target group stickiness for a rule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/elasticloadbalancingv2_listener#target_group_stickiness_config Elasticloadbalancingv2Listener#target_group_stickiness_config}

---

### Elasticloadbalancingv2ListenerDefaultActionsForwardConfigTargetGroups <a name="Elasticloadbalancingv2ListenerDefaultActionsForwardConfigTargetGroups" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsForwardConfigTargetGroups"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsForwardConfigTargetGroups.Initializer"></a>

```java
import io.cdktn.providers.awscc.elasticloadbalancingv2_listener.Elasticloadbalancingv2ListenerDefaultActionsForwardConfigTargetGroups;

Elasticloadbalancingv2ListenerDefaultActionsForwardConfigTargetGroups.builder()
//  .targetGroupArn(java.lang.String)
//  .weight(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsForwardConfigTargetGroups.property.targetGroupArn">targetGroupArn</a></code> | <code>java.lang.String</code> | The Amazon Resource Name (ARN) of the target group. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsForwardConfigTargetGroups.property.weight">weight</a></code> | <code>java.lang.Number</code> | The weight. The range is 0 to 999. |

---

##### `targetGroupArn`<sup>Optional</sup> <a name="targetGroupArn" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsForwardConfigTargetGroups.property.targetGroupArn"></a>

```java
public java.lang.String getTargetGroupArn();
```

- *Type:* java.lang.String

The Amazon Resource Name (ARN) of the target group.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/elasticloadbalancingv2_listener#target_group_arn Elasticloadbalancingv2Listener#target_group_arn}

---

##### `weight`<sup>Optional</sup> <a name="weight" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsForwardConfigTargetGroups.property.weight"></a>

```java
public java.lang.Number getWeight();
```

- *Type:* java.lang.Number

The weight. The range is 0 to 999.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/elasticloadbalancingv2_listener#weight Elasticloadbalancingv2Listener#weight}

---

### Elasticloadbalancingv2ListenerDefaultActionsForwardConfigTargetGroupStickinessConfig <a name="Elasticloadbalancingv2ListenerDefaultActionsForwardConfigTargetGroupStickinessConfig" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsForwardConfigTargetGroupStickinessConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsForwardConfigTargetGroupStickinessConfig.Initializer"></a>

```java
import io.cdktn.providers.awscc.elasticloadbalancingv2_listener.Elasticloadbalancingv2ListenerDefaultActionsForwardConfigTargetGroupStickinessConfig;

Elasticloadbalancingv2ListenerDefaultActionsForwardConfigTargetGroupStickinessConfig.builder()
//  .durationSeconds(java.lang.Number)
//  .enabled(java.lang.Boolean|IResolvable)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsForwardConfigTargetGroupStickinessConfig.property.durationSeconds">durationSeconds</a></code> | <code>java.lang.Number</code> | [Application Load Balancers] The time period, in seconds, during which requests from a client should be routed to the same target group. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsForwardConfigTargetGroupStickinessConfig.property.enabled">enabled</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Indicates whether target group stickiness is enabled. |

---

##### `durationSeconds`<sup>Optional</sup> <a name="durationSeconds" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsForwardConfigTargetGroupStickinessConfig.property.durationSeconds"></a>

```java
public java.lang.Number getDurationSeconds();
```

- *Type:* java.lang.Number

[Application Load Balancers] The time period, in seconds, during which requests from a client should be routed to the same target group.

The range is 1-604800 seconds (7 days). You must specify this value when enabling target group stickiness.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/elasticloadbalancingv2_listener#duration_seconds Elasticloadbalancingv2Listener#duration_seconds}

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsForwardConfigTargetGroupStickinessConfig.property.enabled"></a>

```java
public java.lang.Boolean|IResolvable getEnabled();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Indicates whether target group stickiness is enabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/elasticloadbalancingv2_listener#enabled Elasticloadbalancingv2Listener#enabled}

---

### Elasticloadbalancingv2ListenerDefaultActionsJwtValidationConfig <a name="Elasticloadbalancingv2ListenerDefaultActionsJwtValidationConfig" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsJwtValidationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsJwtValidationConfig.Initializer"></a>

```java
import io.cdktn.providers.awscc.elasticloadbalancingv2_listener.Elasticloadbalancingv2ListenerDefaultActionsJwtValidationConfig;

Elasticloadbalancingv2ListenerDefaultActionsJwtValidationConfig.builder()
//  .additionalClaims(IResolvable|java.util.List<Elasticloadbalancingv2ListenerDefaultActionsJwtValidationConfigAdditionalClaims>)
//  .issuer(java.lang.String)
//  .jwksEndpoint(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsJwtValidationConfig.property.additionalClaims">additionalClaims</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsJwtValidationConfigAdditionalClaims">Elasticloadbalancingv2ListenerDefaultActionsJwtValidationConfigAdditionalClaims</a>></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/elasticloadbalancingv2_listener#additional_claims Elasticloadbalancingv2Listener#additional_claims}. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsJwtValidationConfig.property.issuer">issuer</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/elasticloadbalancingv2_listener#issuer Elasticloadbalancingv2Listener#issuer}. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsJwtValidationConfig.property.jwksEndpoint">jwksEndpoint</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/elasticloadbalancingv2_listener#jwks_endpoint Elasticloadbalancingv2Listener#jwks_endpoint}. |

---

##### `additionalClaims`<sup>Optional</sup> <a name="additionalClaims" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsJwtValidationConfig.property.additionalClaims"></a>

```java
public IResolvable|java.util.List<Elasticloadbalancingv2ListenerDefaultActionsJwtValidationConfigAdditionalClaims> getAdditionalClaims();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsJwtValidationConfigAdditionalClaims">Elasticloadbalancingv2ListenerDefaultActionsJwtValidationConfigAdditionalClaims</a>>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/elasticloadbalancingv2_listener#additional_claims Elasticloadbalancingv2Listener#additional_claims}.

---

##### `issuer`<sup>Optional</sup> <a name="issuer" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsJwtValidationConfig.property.issuer"></a>

```java
public java.lang.String getIssuer();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/elasticloadbalancingv2_listener#issuer Elasticloadbalancingv2Listener#issuer}.

---

##### `jwksEndpoint`<sup>Optional</sup> <a name="jwksEndpoint" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsJwtValidationConfig.property.jwksEndpoint"></a>

```java
public java.lang.String getJwksEndpoint();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/elasticloadbalancingv2_listener#jwks_endpoint Elasticloadbalancingv2Listener#jwks_endpoint}.

---

### Elasticloadbalancingv2ListenerDefaultActionsJwtValidationConfigAdditionalClaims <a name="Elasticloadbalancingv2ListenerDefaultActionsJwtValidationConfigAdditionalClaims" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsJwtValidationConfigAdditionalClaims"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsJwtValidationConfigAdditionalClaims.Initializer"></a>

```java
import io.cdktn.providers.awscc.elasticloadbalancingv2_listener.Elasticloadbalancingv2ListenerDefaultActionsJwtValidationConfigAdditionalClaims;

Elasticloadbalancingv2ListenerDefaultActionsJwtValidationConfigAdditionalClaims.builder()
//  .format(java.lang.String)
//  .name(java.lang.String)
//  .values(java.util.List<java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsJwtValidationConfigAdditionalClaims.property.format">format</a></code> | <code>java.lang.String</code> | The format of the claim value. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsJwtValidationConfigAdditionalClaims.property.name">name</a></code> | <code>java.lang.String</code> | The name of the claim. You can't specify ``exp``, ``iss``, ``nbf``, or ``iat`` because we validate them by default. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsJwtValidationConfigAdditionalClaims.property.values">values</a></code> | <code>java.util.List<java.lang.String></code> | The claim value. |

---

##### `format`<sup>Optional</sup> <a name="format" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsJwtValidationConfigAdditionalClaims.property.format"></a>

```java
public java.lang.String getFormat();
```

- *Type:* java.lang.String

The format of the claim value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/elasticloadbalancingv2_listener#format Elasticloadbalancingv2Listener#format}

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsJwtValidationConfigAdditionalClaims.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

The name of the claim. You can't specify ``exp``, ``iss``, ``nbf``, or ``iat`` because we validate them by default.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/elasticloadbalancingv2_listener#name Elasticloadbalancingv2Listener#name}

---

##### `values`<sup>Optional</sup> <a name="values" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsJwtValidationConfigAdditionalClaims.property.values"></a>

```java
public java.util.List<java.lang.String> getValues();
```

- *Type:* java.util.List<java.lang.String>

The claim value.

The maximum size of the list is 10. Each value can be up to 256 characters in length. If the format is `space-separated-values`, the values can't include spaces.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/elasticloadbalancingv2_listener#values Elasticloadbalancingv2Listener#values}

---

### Elasticloadbalancingv2ListenerDefaultActionsRedirectConfig <a name="Elasticloadbalancingv2ListenerDefaultActionsRedirectConfig" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsRedirectConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsRedirectConfig.Initializer"></a>

```java
import io.cdktn.providers.awscc.elasticloadbalancingv2_listener.Elasticloadbalancingv2ListenerDefaultActionsRedirectConfig;

Elasticloadbalancingv2ListenerDefaultActionsRedirectConfig.builder()
//  .host(java.lang.String)
//  .path(java.lang.String)
//  .port(java.lang.String)
//  .protocol(java.lang.String)
//  .query(java.lang.String)
//  .statusCode(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsRedirectConfig.property.host">host</a></code> | <code>java.lang.String</code> | The hostname. This component is not percent-encoded. The hostname can contain #{host}. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsRedirectConfig.property.path">path</a></code> | <code>java.lang.String</code> | The absolute path, starting with the leading "/". |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsRedirectConfig.property.port">port</a></code> | <code>java.lang.String</code> | The port. You can specify a value from 1 to 65535 or #{port}. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsRedirectConfig.property.protocol">protocol</a></code> | <code>java.lang.String</code> | The protocol. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsRedirectConfig.property.query">query</a></code> | <code>java.lang.String</code> | The query parameters, URL-encoded when necessary, but not percent-encoded. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsRedirectConfig.property.statusCode">statusCode</a></code> | <code>java.lang.String</code> | The HTTP redirect code. The redirect is either permanent (HTTP 301) or temporary (HTTP 302). |

---

##### `host`<sup>Optional</sup> <a name="host" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsRedirectConfig.property.host"></a>

```java
public java.lang.String getHost();
```

- *Type:* java.lang.String

The hostname. This component is not percent-encoded. The hostname can contain #{host}.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/elasticloadbalancingv2_listener#host Elasticloadbalancingv2Listener#host}

---

##### `path`<sup>Optional</sup> <a name="path" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsRedirectConfig.property.path"></a>

```java
public java.lang.String getPath();
```

- *Type:* java.lang.String

The absolute path, starting with the leading "/".

This component is not percent-encoded. The path can contain #{host}, #{path}, and #{port}.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/elasticloadbalancingv2_listener#path Elasticloadbalancingv2Listener#path}

---

##### `port`<sup>Optional</sup> <a name="port" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsRedirectConfig.property.port"></a>

```java
public java.lang.String getPort();
```

- *Type:* java.lang.String

The port. You can specify a value from 1 to 65535 or #{port}.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/elasticloadbalancingv2_listener#port Elasticloadbalancingv2Listener#port}

---

##### `protocol`<sup>Optional</sup> <a name="protocol" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsRedirectConfig.property.protocol"></a>

```java
public java.lang.String getProtocol();
```

- *Type:* java.lang.String

The protocol.

You can specify HTTP, HTTPS, or #{protocol}. You can redirect HTTP to HTTP, HTTP to HTTPS, and HTTPS to HTTPS. You can't redirect HTTPS to HTTP.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/elasticloadbalancingv2_listener#protocol Elasticloadbalancingv2Listener#protocol}

---

##### `query`<sup>Optional</sup> <a name="query" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsRedirectConfig.property.query"></a>

```java
public java.lang.String getQuery();
```

- *Type:* java.lang.String

The query parameters, URL-encoded when necessary, but not percent-encoded.

Do not include the leading "?", as it is automatically added. You can specify any of the reserved keywords.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/elasticloadbalancingv2_listener#query Elasticloadbalancingv2Listener#query}

---

##### `statusCode`<sup>Optional</sup> <a name="statusCode" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsRedirectConfig.property.statusCode"></a>

```java
public java.lang.String getStatusCode();
```

- *Type:* java.lang.String

The HTTP redirect code. The redirect is either permanent (HTTP 301) or temporary (HTTP 302).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/elasticloadbalancingv2_listener#status_code Elasticloadbalancingv2Listener#status_code}

---

### Elasticloadbalancingv2ListenerListenerAttributes <a name="Elasticloadbalancingv2ListenerListenerAttributes" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerListenerAttributes"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerListenerAttributes.Initializer"></a>

```java
import io.cdktn.providers.awscc.elasticloadbalancingv2_listener.Elasticloadbalancingv2ListenerListenerAttributes;

Elasticloadbalancingv2ListenerListenerAttributes.builder()
//  .key(java.lang.String)
//  .value(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerListenerAttributes.property.key">key</a></code> | <code>java.lang.String</code> | The name of the attribute. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerListenerAttributes.property.value">value</a></code> | <code>java.lang.String</code> | The value of the attribute. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerListenerAttributes.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

The name of the attribute.

The following attribute is supported by Network Load Balancers, and Gateway Load Balancers.

* `tcp.idle_timeout.seconds` - The tcp idle timeout value, in seconds. The valid range is 60-6000 seconds. The default is 350 seconds.

The following attributes are only supported by Application Load Balancers.

* `routing.http.request.x_amzn_mtls_clientcert_serial_number.header_name` - Enables you to modify the header name of the *X-Amzn-Mtls-Clientcert-Serial-Number* HTTP request header.
* `routing.http.request.x_amzn_mtls_clientcert_issuer.header_name` - Enables you to modify the header name of the *X-Amzn-Mtls-Clientcert-Issuer* HTTP request header.
* `routing.http.request.x_amzn_mtls_clientcert_subject.header_name` - Enables you to modify the header name of the *X-Amzn-Mtls-Clientcert-Subject* HTTP request header.
* `routing.http.request.x_amzn_mtls_clientcert_validity.header_name` - Enables you to modify the header name of the *X-Amzn-Mtls-Clientcert-Validity* HTTP request header.
* `routing.http.request.x_amzn_mtls_clientcert_leaf.header_name` - Enables you to modify the header name of the *X-Amzn-Mtls-Clientcert-Leaf* HTTP request header.
* `routing.http.request.x_amzn_mtls_clientcert.header_name` - Enables you to modify the header name of the *X-Amzn-Mtls-Clientcert* HTTP request header.
* `routing.http.request.x_amzn_tls_version.header_name` - Enables you to modify the header name of the *X-Amzn-Tls-Version* HTTP request header.
* `routing.http.request.x_amzn_tls_cipher_suite.header_name` - Enables you to modify the header name of the *X-Amzn-Tls-Cipher-Suite* HTTP request header.
* `routing.http.response.server.enabled` - Enables you to allow or remove the HTTP response server header.
* `routing.http.response.strict_transport_security.header_value` - Informs browsers that the site should only be accessed using HTTPS, and that any future attempts to access it using HTTP should automatically be converted to HTTPS.
* `routing.http.response.access_control_allow_origin.header_value` - Specifies which origins are allowed to access the server.
* `routing.http.response.access_control_allow_methods.header_value` - Returns which HTTP methods are allowed when accessing the server from a different origin.
* `routing.http.response.access_control_allow_headers.header_value` - Specifies which headers can be used during the request.
* `routing.http.response.access_control_allow_credentials.header_value` - Indicates whether the browser should include credentials such as cookies or authentication when making requests.
* `routing.http.response.access_control_expose_headers.header_value` - Returns which headers the browser can expose to the requesting client.
* `routing.http.response.access_control_max_age.header_value` - Specifies how long the results of a preflight request can be cached, in seconds.
* `routing.http.response.content_security_policy.header_value` - Specifies restrictions enforced by the browser to help minimize the risk of certain types of security threats.
* `routing.http.response.x_content_type_options.header_value` - Indicates whether the MIME types advertised in the *Content-Type* headers should be followed and not be changed.
* `routing.http.response.x_frame_options.header_value` - Indicates whether the browser is allowed to render a page in a *frame*, *iframe*, *embed* or *object*.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/elasticloadbalancingv2_listener#key Elasticloadbalancingv2Listener#key}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerListenerAttributes.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

The value of the attribute.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/elasticloadbalancingv2_listener#value Elasticloadbalancingv2Listener#value}

---

### Elasticloadbalancingv2ListenerMutualAuthentication <a name="Elasticloadbalancingv2ListenerMutualAuthentication" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerMutualAuthentication"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerMutualAuthentication.Initializer"></a>

```java
import io.cdktn.providers.awscc.elasticloadbalancingv2_listener.Elasticloadbalancingv2ListenerMutualAuthentication;

Elasticloadbalancingv2ListenerMutualAuthentication.builder()
//  .advertiseTrustStoreCaNames(java.lang.String)
//  .ignoreClientCertificateExpiry(java.lang.Boolean|IResolvable)
//  .mode(java.lang.String)
//  .trustStoreArn(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerMutualAuthentication.property.advertiseTrustStoreCaNames">advertiseTrustStoreCaNames</a></code> | <code>java.lang.String</code> | Indicates whether trust store CA certificate names are advertised. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerMutualAuthentication.property.ignoreClientCertificateExpiry">ignoreClientCertificateExpiry</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Indicates whether expired client certificates are ignored. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerMutualAuthentication.property.mode">mode</a></code> | <code>java.lang.String</code> | The client certificate handling method. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerMutualAuthentication.property.trustStoreArn">trustStoreArn</a></code> | <code>java.lang.String</code> | The Amazon Resource Name (ARN) of the trust store. |

---

##### `advertiseTrustStoreCaNames`<sup>Optional</sup> <a name="advertiseTrustStoreCaNames" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerMutualAuthentication.property.advertiseTrustStoreCaNames"></a>

```java
public java.lang.String getAdvertiseTrustStoreCaNames();
```

- *Type:* java.lang.String

Indicates whether trust store CA certificate names are advertised.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/elasticloadbalancingv2_listener#advertise_trust_store_ca_names Elasticloadbalancingv2Listener#advertise_trust_store_ca_names}

---

##### `ignoreClientCertificateExpiry`<sup>Optional</sup> <a name="ignoreClientCertificateExpiry" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerMutualAuthentication.property.ignoreClientCertificateExpiry"></a>

```java
public java.lang.Boolean|IResolvable getIgnoreClientCertificateExpiry();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Indicates whether expired client certificates are ignored.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/elasticloadbalancingv2_listener#ignore_client_certificate_expiry Elasticloadbalancingv2Listener#ignore_client_certificate_expiry}

---

##### `mode`<sup>Optional</sup> <a name="mode" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerMutualAuthentication.property.mode"></a>

```java
public java.lang.String getMode();
```

- *Type:* java.lang.String

The client certificate handling method.

Options are `off`, `passthrough` or `verify`. The default value on initial resource creation is `off`. After mutual authentication is turned on, you must explicitly set the `Mode` to `off` to turn it off; removing the property from your template will not turn it off.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/elasticloadbalancingv2_listener#mode Elasticloadbalancingv2Listener#mode}

---

##### `trustStoreArn`<sup>Optional</sup> <a name="trustStoreArn" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerMutualAuthentication.property.trustStoreArn"></a>

```java
public java.lang.String getTrustStoreArn();
```

- *Type:* java.lang.String

The Amazon Resource Name (ARN) of the trust store.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/elasticloadbalancingv2_listener#trust_store_arn Elasticloadbalancingv2Listener#trust_store_arn}

---

### Elasticloadbalancingv2ListenerTags <a name="Elasticloadbalancingv2ListenerTags" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerTags.Initializer"></a>

```java
import io.cdktn.providers.awscc.elasticloadbalancingv2_listener.Elasticloadbalancingv2ListenerTags;

Elasticloadbalancingv2ListenerTags.builder()
//  .key(java.lang.String)
//  .value(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerTags.property.key">key</a></code> | <code>java.lang.String</code> | The key of the tag. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerTags.property.value">value</a></code> | <code>java.lang.String</code> | The value of the tag. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerTags.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

The key of the tag.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/elasticloadbalancingv2_listener#key Elasticloadbalancingv2Listener#key}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerTags.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

The value of the tag.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/elasticloadbalancingv2_listener#value Elasticloadbalancingv2Listener#value}

---

## Classes <a name="Classes" id="Classes"></a>

### Elasticloadbalancingv2ListenerCertificatesList <a name="Elasticloadbalancingv2ListenerCertificatesList" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerCertificatesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerCertificatesList.Initializer"></a>

```java
import io.cdktn.providers.awscc.elasticloadbalancingv2_listener.Elasticloadbalancingv2ListenerCertificatesList;

new Elasticloadbalancingv2ListenerCertificatesList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerCertificatesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerCertificatesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerCertificatesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerCertificatesList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerCertificatesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerCertificatesList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerCertificatesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerCertificatesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerCertificatesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerCertificatesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerCertificatesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerCertificatesList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerCertificatesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerCertificatesList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerCertificatesList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerCertificatesList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerCertificatesList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerCertificatesList.get"></a>

```java
public Elasticloadbalancingv2ListenerCertificatesOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerCertificatesList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerCertificatesList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerCertificatesList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerCertificatesList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerCertificates">Elasticloadbalancingv2ListenerCertificates</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerCertificatesList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerCertificatesList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerCertificatesList.property.internalValue"></a>

```java
public IResolvable|java.util.List<Elasticloadbalancingv2ListenerCertificates> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerCertificates">Elasticloadbalancingv2ListenerCertificates</a>>

---


### Elasticloadbalancingv2ListenerCertificatesOutputReference <a name="Elasticloadbalancingv2ListenerCertificatesOutputReference" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerCertificatesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerCertificatesOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.elasticloadbalancingv2_listener.Elasticloadbalancingv2ListenerCertificatesOutputReference;

new Elasticloadbalancingv2ListenerCertificatesOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerCertificatesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerCertificatesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerCertificatesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerCertificatesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerCertificatesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerCertificatesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerCertificatesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerCertificatesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerCertificatesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerCertificatesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerCertificatesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerCertificatesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerCertificatesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerCertificatesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerCertificatesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerCertificatesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerCertificatesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerCertificatesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerCertificatesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerCertificatesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerCertificatesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerCertificatesOutputReference.resetCertificateArn">resetCertificateArn</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerCertificatesOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerCertificatesOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerCertificatesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerCertificatesOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerCertificatesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerCertificatesOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerCertificatesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerCertificatesOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerCertificatesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerCertificatesOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerCertificatesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerCertificatesOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerCertificatesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerCertificatesOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerCertificatesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerCertificatesOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerCertificatesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerCertificatesOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerCertificatesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerCertificatesOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerCertificatesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerCertificatesOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerCertificatesOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerCertificatesOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCertificateArn` <a name="resetCertificateArn" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerCertificatesOutputReference.resetCertificateArn"></a>

```java
public void resetCertificateArn()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerCertificatesOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerCertificatesOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerCertificatesOutputReference.property.certificateArnInput">certificateArnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerCertificatesOutputReference.property.certificateArn">certificateArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerCertificatesOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerCertificates">Elasticloadbalancingv2ListenerCertificates</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerCertificatesOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerCertificatesOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `certificateArnInput`<sup>Optional</sup> <a name="certificateArnInput" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerCertificatesOutputReference.property.certificateArnInput"></a>

```java
public java.lang.String getCertificateArnInput();
```

- *Type:* java.lang.String

---

##### `certificateArn`<sup>Required</sup> <a name="certificateArn" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerCertificatesOutputReference.property.certificateArn"></a>

```java
public java.lang.String getCertificateArn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerCertificatesOutputReference.property.internalValue"></a>

```java
public IResolvable|Elasticloadbalancingv2ListenerCertificates getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerCertificates">Elasticloadbalancingv2ListenerCertificates</a>

---


### Elasticloadbalancingv2ListenerDefaultActionsAuthenticateCognitoConfigOutputReference <a name="Elasticloadbalancingv2ListenerDefaultActionsAuthenticateCognitoConfigOutputReference" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsAuthenticateCognitoConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsAuthenticateCognitoConfigOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.elasticloadbalancingv2_listener.Elasticloadbalancingv2ListenerDefaultActionsAuthenticateCognitoConfigOutputReference;

new Elasticloadbalancingv2ListenerDefaultActionsAuthenticateCognitoConfigOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsAuthenticateCognitoConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsAuthenticateCognitoConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsAuthenticateCognitoConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsAuthenticateCognitoConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsAuthenticateCognitoConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsAuthenticateCognitoConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsAuthenticateCognitoConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsAuthenticateCognitoConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsAuthenticateCognitoConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsAuthenticateCognitoConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsAuthenticateCognitoConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsAuthenticateCognitoConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsAuthenticateCognitoConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsAuthenticateCognitoConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsAuthenticateCognitoConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsAuthenticateCognitoConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsAuthenticateCognitoConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsAuthenticateCognitoConfigOutputReference.resetAuthenticationRequestExtraParams">resetAuthenticationRequestExtraParams</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsAuthenticateCognitoConfigOutputReference.resetOnUnauthenticatedRequest">resetOnUnauthenticatedRequest</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsAuthenticateCognitoConfigOutputReference.resetScope">resetScope</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsAuthenticateCognitoConfigOutputReference.resetSessionCookieName">resetSessionCookieName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsAuthenticateCognitoConfigOutputReference.resetSessionTimeout">resetSessionTimeout</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsAuthenticateCognitoConfigOutputReference.resetUserPoolArn">resetUserPoolArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsAuthenticateCognitoConfigOutputReference.resetUserPoolClientId">resetUserPoolClientId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsAuthenticateCognitoConfigOutputReference.resetUserPoolDomain">resetUserPoolDomain</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsAuthenticateCognitoConfigOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsAuthenticateCognitoConfigOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsAuthenticateCognitoConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsAuthenticateCognitoConfigOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsAuthenticateCognitoConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsAuthenticateCognitoConfigOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsAuthenticateCognitoConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsAuthenticateCognitoConfigOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsAuthenticateCognitoConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsAuthenticateCognitoConfigOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsAuthenticateCognitoConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsAuthenticateCognitoConfigOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsAuthenticateCognitoConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsAuthenticateCognitoConfigOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsAuthenticateCognitoConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsAuthenticateCognitoConfigOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsAuthenticateCognitoConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsAuthenticateCognitoConfigOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsAuthenticateCognitoConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsAuthenticateCognitoConfigOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsAuthenticateCognitoConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsAuthenticateCognitoConfigOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsAuthenticateCognitoConfigOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsAuthenticateCognitoConfigOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAuthenticationRequestExtraParams` <a name="resetAuthenticationRequestExtraParams" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsAuthenticateCognitoConfigOutputReference.resetAuthenticationRequestExtraParams"></a>

```java
public void resetAuthenticationRequestExtraParams()
```

##### `resetOnUnauthenticatedRequest` <a name="resetOnUnauthenticatedRequest" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsAuthenticateCognitoConfigOutputReference.resetOnUnauthenticatedRequest"></a>

```java
public void resetOnUnauthenticatedRequest()
```

##### `resetScope` <a name="resetScope" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsAuthenticateCognitoConfigOutputReference.resetScope"></a>

```java
public void resetScope()
```

##### `resetSessionCookieName` <a name="resetSessionCookieName" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsAuthenticateCognitoConfigOutputReference.resetSessionCookieName"></a>

```java
public void resetSessionCookieName()
```

##### `resetSessionTimeout` <a name="resetSessionTimeout" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsAuthenticateCognitoConfigOutputReference.resetSessionTimeout"></a>

```java
public void resetSessionTimeout()
```

##### `resetUserPoolArn` <a name="resetUserPoolArn" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsAuthenticateCognitoConfigOutputReference.resetUserPoolArn"></a>

```java
public void resetUserPoolArn()
```

##### `resetUserPoolClientId` <a name="resetUserPoolClientId" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsAuthenticateCognitoConfigOutputReference.resetUserPoolClientId"></a>

```java
public void resetUserPoolClientId()
```

##### `resetUserPoolDomain` <a name="resetUserPoolDomain" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsAuthenticateCognitoConfigOutputReference.resetUserPoolDomain"></a>

```java
public void resetUserPoolDomain()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsAuthenticateCognitoConfigOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsAuthenticateCognitoConfigOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsAuthenticateCognitoConfigOutputReference.property.authenticationRequestExtraParamsInput">authenticationRequestExtraParamsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsAuthenticateCognitoConfigOutputReference.property.onUnauthenticatedRequestInput">onUnauthenticatedRequestInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsAuthenticateCognitoConfigOutputReference.property.scopeInput">scopeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsAuthenticateCognitoConfigOutputReference.property.sessionCookieNameInput">sessionCookieNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsAuthenticateCognitoConfigOutputReference.property.sessionTimeoutInput">sessionTimeoutInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsAuthenticateCognitoConfigOutputReference.property.userPoolArnInput">userPoolArnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsAuthenticateCognitoConfigOutputReference.property.userPoolClientIdInput">userPoolClientIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsAuthenticateCognitoConfigOutputReference.property.userPoolDomainInput">userPoolDomainInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsAuthenticateCognitoConfigOutputReference.property.authenticationRequestExtraParams">authenticationRequestExtraParams</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsAuthenticateCognitoConfigOutputReference.property.onUnauthenticatedRequest">onUnauthenticatedRequest</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsAuthenticateCognitoConfigOutputReference.property.scope">scope</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsAuthenticateCognitoConfigOutputReference.property.sessionCookieName">sessionCookieName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsAuthenticateCognitoConfigOutputReference.property.sessionTimeout">sessionTimeout</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsAuthenticateCognitoConfigOutputReference.property.userPoolArn">userPoolArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsAuthenticateCognitoConfigOutputReference.property.userPoolClientId">userPoolClientId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsAuthenticateCognitoConfigOutputReference.property.userPoolDomain">userPoolDomain</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsAuthenticateCognitoConfigOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsAuthenticateCognitoConfig">Elasticloadbalancingv2ListenerDefaultActionsAuthenticateCognitoConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsAuthenticateCognitoConfigOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsAuthenticateCognitoConfigOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `authenticationRequestExtraParamsInput`<sup>Optional</sup> <a name="authenticationRequestExtraParamsInput" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsAuthenticateCognitoConfigOutputReference.property.authenticationRequestExtraParamsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getAuthenticationRequestExtraParamsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `onUnauthenticatedRequestInput`<sup>Optional</sup> <a name="onUnauthenticatedRequestInput" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsAuthenticateCognitoConfigOutputReference.property.onUnauthenticatedRequestInput"></a>

```java
public java.lang.String getOnUnauthenticatedRequestInput();
```

- *Type:* java.lang.String

---

##### `scopeInput`<sup>Optional</sup> <a name="scopeInput" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsAuthenticateCognitoConfigOutputReference.property.scopeInput"></a>

```java
public java.lang.String getScopeInput();
```

- *Type:* java.lang.String

---

##### `sessionCookieNameInput`<sup>Optional</sup> <a name="sessionCookieNameInput" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsAuthenticateCognitoConfigOutputReference.property.sessionCookieNameInput"></a>

```java
public java.lang.String getSessionCookieNameInput();
```

- *Type:* java.lang.String

---

##### `sessionTimeoutInput`<sup>Optional</sup> <a name="sessionTimeoutInput" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsAuthenticateCognitoConfigOutputReference.property.sessionTimeoutInput"></a>

```java
public java.lang.String getSessionTimeoutInput();
```

- *Type:* java.lang.String

---

##### `userPoolArnInput`<sup>Optional</sup> <a name="userPoolArnInput" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsAuthenticateCognitoConfigOutputReference.property.userPoolArnInput"></a>

```java
public java.lang.String getUserPoolArnInput();
```

- *Type:* java.lang.String

---

##### `userPoolClientIdInput`<sup>Optional</sup> <a name="userPoolClientIdInput" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsAuthenticateCognitoConfigOutputReference.property.userPoolClientIdInput"></a>

```java
public java.lang.String getUserPoolClientIdInput();
```

- *Type:* java.lang.String

---

##### `userPoolDomainInput`<sup>Optional</sup> <a name="userPoolDomainInput" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsAuthenticateCognitoConfigOutputReference.property.userPoolDomainInput"></a>

```java
public java.lang.String getUserPoolDomainInput();
```

- *Type:* java.lang.String

---

##### `authenticationRequestExtraParams`<sup>Required</sup> <a name="authenticationRequestExtraParams" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsAuthenticateCognitoConfigOutputReference.property.authenticationRequestExtraParams"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getAuthenticationRequestExtraParams();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `onUnauthenticatedRequest`<sup>Required</sup> <a name="onUnauthenticatedRequest" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsAuthenticateCognitoConfigOutputReference.property.onUnauthenticatedRequest"></a>

```java
public java.lang.String getOnUnauthenticatedRequest();
```

- *Type:* java.lang.String

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsAuthenticateCognitoConfigOutputReference.property.scope"></a>

```java
public java.lang.String getScope();
```

- *Type:* java.lang.String

---

##### `sessionCookieName`<sup>Required</sup> <a name="sessionCookieName" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsAuthenticateCognitoConfigOutputReference.property.sessionCookieName"></a>

```java
public java.lang.String getSessionCookieName();
```

- *Type:* java.lang.String

---

##### `sessionTimeout`<sup>Required</sup> <a name="sessionTimeout" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsAuthenticateCognitoConfigOutputReference.property.sessionTimeout"></a>

```java
public java.lang.String getSessionTimeout();
```

- *Type:* java.lang.String

---

##### `userPoolArn`<sup>Required</sup> <a name="userPoolArn" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsAuthenticateCognitoConfigOutputReference.property.userPoolArn"></a>

```java
public java.lang.String getUserPoolArn();
```

- *Type:* java.lang.String

---

##### `userPoolClientId`<sup>Required</sup> <a name="userPoolClientId" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsAuthenticateCognitoConfigOutputReference.property.userPoolClientId"></a>

```java
public java.lang.String getUserPoolClientId();
```

- *Type:* java.lang.String

---

##### `userPoolDomain`<sup>Required</sup> <a name="userPoolDomain" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsAuthenticateCognitoConfigOutputReference.property.userPoolDomain"></a>

```java
public java.lang.String getUserPoolDomain();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsAuthenticateCognitoConfigOutputReference.property.internalValue"></a>

```java
public IResolvable|Elasticloadbalancingv2ListenerDefaultActionsAuthenticateCognitoConfig getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsAuthenticateCognitoConfig">Elasticloadbalancingv2ListenerDefaultActionsAuthenticateCognitoConfig</a>

---


### Elasticloadbalancingv2ListenerDefaultActionsAuthenticateOidcConfigOutputReference <a name="Elasticloadbalancingv2ListenerDefaultActionsAuthenticateOidcConfigOutputReference" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsAuthenticateOidcConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsAuthenticateOidcConfigOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.elasticloadbalancingv2_listener.Elasticloadbalancingv2ListenerDefaultActionsAuthenticateOidcConfigOutputReference;

new Elasticloadbalancingv2ListenerDefaultActionsAuthenticateOidcConfigOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsAuthenticateOidcConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsAuthenticateOidcConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsAuthenticateOidcConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsAuthenticateOidcConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsAuthenticateOidcConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsAuthenticateOidcConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsAuthenticateOidcConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsAuthenticateOidcConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsAuthenticateOidcConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsAuthenticateOidcConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsAuthenticateOidcConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsAuthenticateOidcConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsAuthenticateOidcConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsAuthenticateOidcConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsAuthenticateOidcConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsAuthenticateOidcConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsAuthenticateOidcConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsAuthenticateOidcConfigOutputReference.resetAuthenticationRequestExtraParams">resetAuthenticationRequestExtraParams</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsAuthenticateOidcConfigOutputReference.resetAuthorizationEndpoint">resetAuthorizationEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsAuthenticateOidcConfigOutputReference.resetClientId">resetClientId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsAuthenticateOidcConfigOutputReference.resetClientSecret">resetClientSecret</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsAuthenticateOidcConfigOutputReference.resetIssuer">resetIssuer</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsAuthenticateOidcConfigOutputReference.resetOnUnauthenticatedRequest">resetOnUnauthenticatedRequest</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsAuthenticateOidcConfigOutputReference.resetScope">resetScope</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsAuthenticateOidcConfigOutputReference.resetSessionCookieName">resetSessionCookieName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsAuthenticateOidcConfigOutputReference.resetSessionTimeout">resetSessionTimeout</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsAuthenticateOidcConfigOutputReference.resetTokenEndpoint">resetTokenEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsAuthenticateOidcConfigOutputReference.resetUseExistingClientSecret">resetUseExistingClientSecret</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsAuthenticateOidcConfigOutputReference.resetUserInfoEndpoint">resetUserInfoEndpoint</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsAuthenticateOidcConfigOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsAuthenticateOidcConfigOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsAuthenticateOidcConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsAuthenticateOidcConfigOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsAuthenticateOidcConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsAuthenticateOidcConfigOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsAuthenticateOidcConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsAuthenticateOidcConfigOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsAuthenticateOidcConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsAuthenticateOidcConfigOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsAuthenticateOidcConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsAuthenticateOidcConfigOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsAuthenticateOidcConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsAuthenticateOidcConfigOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsAuthenticateOidcConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsAuthenticateOidcConfigOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsAuthenticateOidcConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsAuthenticateOidcConfigOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsAuthenticateOidcConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsAuthenticateOidcConfigOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsAuthenticateOidcConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsAuthenticateOidcConfigOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsAuthenticateOidcConfigOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsAuthenticateOidcConfigOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAuthenticationRequestExtraParams` <a name="resetAuthenticationRequestExtraParams" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsAuthenticateOidcConfigOutputReference.resetAuthenticationRequestExtraParams"></a>

```java
public void resetAuthenticationRequestExtraParams()
```

##### `resetAuthorizationEndpoint` <a name="resetAuthorizationEndpoint" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsAuthenticateOidcConfigOutputReference.resetAuthorizationEndpoint"></a>

```java
public void resetAuthorizationEndpoint()
```

##### `resetClientId` <a name="resetClientId" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsAuthenticateOidcConfigOutputReference.resetClientId"></a>

```java
public void resetClientId()
```

##### `resetClientSecret` <a name="resetClientSecret" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsAuthenticateOidcConfigOutputReference.resetClientSecret"></a>

```java
public void resetClientSecret()
```

##### `resetIssuer` <a name="resetIssuer" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsAuthenticateOidcConfigOutputReference.resetIssuer"></a>

```java
public void resetIssuer()
```

##### `resetOnUnauthenticatedRequest` <a name="resetOnUnauthenticatedRequest" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsAuthenticateOidcConfigOutputReference.resetOnUnauthenticatedRequest"></a>

```java
public void resetOnUnauthenticatedRequest()
```

##### `resetScope` <a name="resetScope" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsAuthenticateOidcConfigOutputReference.resetScope"></a>

```java
public void resetScope()
```

##### `resetSessionCookieName` <a name="resetSessionCookieName" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsAuthenticateOidcConfigOutputReference.resetSessionCookieName"></a>

```java
public void resetSessionCookieName()
```

##### `resetSessionTimeout` <a name="resetSessionTimeout" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsAuthenticateOidcConfigOutputReference.resetSessionTimeout"></a>

```java
public void resetSessionTimeout()
```

##### `resetTokenEndpoint` <a name="resetTokenEndpoint" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsAuthenticateOidcConfigOutputReference.resetTokenEndpoint"></a>

```java
public void resetTokenEndpoint()
```

##### `resetUseExistingClientSecret` <a name="resetUseExistingClientSecret" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsAuthenticateOidcConfigOutputReference.resetUseExistingClientSecret"></a>

```java
public void resetUseExistingClientSecret()
```

##### `resetUserInfoEndpoint` <a name="resetUserInfoEndpoint" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsAuthenticateOidcConfigOutputReference.resetUserInfoEndpoint"></a>

```java
public void resetUserInfoEndpoint()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsAuthenticateOidcConfigOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsAuthenticateOidcConfigOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsAuthenticateOidcConfigOutputReference.property.authenticationRequestExtraParamsInput">authenticationRequestExtraParamsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsAuthenticateOidcConfigOutputReference.property.authorizationEndpointInput">authorizationEndpointInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsAuthenticateOidcConfigOutputReference.property.clientIdInput">clientIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsAuthenticateOidcConfigOutputReference.property.clientSecretInput">clientSecretInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsAuthenticateOidcConfigOutputReference.property.issuerInput">issuerInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsAuthenticateOidcConfigOutputReference.property.onUnauthenticatedRequestInput">onUnauthenticatedRequestInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsAuthenticateOidcConfigOutputReference.property.scopeInput">scopeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsAuthenticateOidcConfigOutputReference.property.sessionCookieNameInput">sessionCookieNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsAuthenticateOidcConfigOutputReference.property.sessionTimeoutInput">sessionTimeoutInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsAuthenticateOidcConfigOutputReference.property.tokenEndpointInput">tokenEndpointInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsAuthenticateOidcConfigOutputReference.property.useExistingClientSecretInput">useExistingClientSecretInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsAuthenticateOidcConfigOutputReference.property.userInfoEndpointInput">userInfoEndpointInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsAuthenticateOidcConfigOutputReference.property.authenticationRequestExtraParams">authenticationRequestExtraParams</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsAuthenticateOidcConfigOutputReference.property.authorizationEndpoint">authorizationEndpoint</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsAuthenticateOidcConfigOutputReference.property.clientId">clientId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsAuthenticateOidcConfigOutputReference.property.clientSecret">clientSecret</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsAuthenticateOidcConfigOutputReference.property.issuer">issuer</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsAuthenticateOidcConfigOutputReference.property.onUnauthenticatedRequest">onUnauthenticatedRequest</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsAuthenticateOidcConfigOutputReference.property.scope">scope</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsAuthenticateOidcConfigOutputReference.property.sessionCookieName">sessionCookieName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsAuthenticateOidcConfigOutputReference.property.sessionTimeout">sessionTimeout</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsAuthenticateOidcConfigOutputReference.property.tokenEndpoint">tokenEndpoint</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsAuthenticateOidcConfigOutputReference.property.useExistingClientSecret">useExistingClientSecret</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsAuthenticateOidcConfigOutputReference.property.userInfoEndpoint">userInfoEndpoint</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsAuthenticateOidcConfigOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsAuthenticateOidcConfig">Elasticloadbalancingv2ListenerDefaultActionsAuthenticateOidcConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsAuthenticateOidcConfigOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsAuthenticateOidcConfigOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `authenticationRequestExtraParamsInput`<sup>Optional</sup> <a name="authenticationRequestExtraParamsInput" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsAuthenticateOidcConfigOutputReference.property.authenticationRequestExtraParamsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getAuthenticationRequestExtraParamsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `authorizationEndpointInput`<sup>Optional</sup> <a name="authorizationEndpointInput" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsAuthenticateOidcConfigOutputReference.property.authorizationEndpointInput"></a>

```java
public java.lang.String getAuthorizationEndpointInput();
```

- *Type:* java.lang.String

---

##### `clientIdInput`<sup>Optional</sup> <a name="clientIdInput" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsAuthenticateOidcConfigOutputReference.property.clientIdInput"></a>

```java
public java.lang.String getClientIdInput();
```

- *Type:* java.lang.String

---

##### `clientSecretInput`<sup>Optional</sup> <a name="clientSecretInput" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsAuthenticateOidcConfigOutputReference.property.clientSecretInput"></a>

```java
public java.lang.String getClientSecretInput();
```

- *Type:* java.lang.String

---

##### `issuerInput`<sup>Optional</sup> <a name="issuerInput" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsAuthenticateOidcConfigOutputReference.property.issuerInput"></a>

```java
public java.lang.String getIssuerInput();
```

- *Type:* java.lang.String

---

##### `onUnauthenticatedRequestInput`<sup>Optional</sup> <a name="onUnauthenticatedRequestInput" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsAuthenticateOidcConfigOutputReference.property.onUnauthenticatedRequestInput"></a>

```java
public java.lang.String getOnUnauthenticatedRequestInput();
```

- *Type:* java.lang.String

---

##### `scopeInput`<sup>Optional</sup> <a name="scopeInput" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsAuthenticateOidcConfigOutputReference.property.scopeInput"></a>

```java
public java.lang.String getScopeInput();
```

- *Type:* java.lang.String

---

##### `sessionCookieNameInput`<sup>Optional</sup> <a name="sessionCookieNameInput" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsAuthenticateOidcConfigOutputReference.property.sessionCookieNameInput"></a>

```java
public java.lang.String getSessionCookieNameInput();
```

- *Type:* java.lang.String

---

##### `sessionTimeoutInput`<sup>Optional</sup> <a name="sessionTimeoutInput" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsAuthenticateOidcConfigOutputReference.property.sessionTimeoutInput"></a>

```java
public java.lang.String getSessionTimeoutInput();
```

- *Type:* java.lang.String

---

##### `tokenEndpointInput`<sup>Optional</sup> <a name="tokenEndpointInput" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsAuthenticateOidcConfigOutputReference.property.tokenEndpointInput"></a>

```java
public java.lang.String getTokenEndpointInput();
```

- *Type:* java.lang.String

---

##### `useExistingClientSecretInput`<sup>Optional</sup> <a name="useExistingClientSecretInput" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsAuthenticateOidcConfigOutputReference.property.useExistingClientSecretInput"></a>

```java
public java.lang.Boolean|IResolvable getUseExistingClientSecretInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `userInfoEndpointInput`<sup>Optional</sup> <a name="userInfoEndpointInput" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsAuthenticateOidcConfigOutputReference.property.userInfoEndpointInput"></a>

```java
public java.lang.String getUserInfoEndpointInput();
```

- *Type:* java.lang.String

---

##### `authenticationRequestExtraParams`<sup>Required</sup> <a name="authenticationRequestExtraParams" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsAuthenticateOidcConfigOutputReference.property.authenticationRequestExtraParams"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getAuthenticationRequestExtraParams();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `authorizationEndpoint`<sup>Required</sup> <a name="authorizationEndpoint" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsAuthenticateOidcConfigOutputReference.property.authorizationEndpoint"></a>

```java
public java.lang.String getAuthorizationEndpoint();
```

- *Type:* java.lang.String

---

##### `clientId`<sup>Required</sup> <a name="clientId" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsAuthenticateOidcConfigOutputReference.property.clientId"></a>

```java
public java.lang.String getClientId();
```

- *Type:* java.lang.String

---

##### `clientSecret`<sup>Required</sup> <a name="clientSecret" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsAuthenticateOidcConfigOutputReference.property.clientSecret"></a>

```java
public java.lang.String getClientSecret();
```

- *Type:* java.lang.String

---

##### `issuer`<sup>Required</sup> <a name="issuer" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsAuthenticateOidcConfigOutputReference.property.issuer"></a>

```java
public java.lang.String getIssuer();
```

- *Type:* java.lang.String

---

##### `onUnauthenticatedRequest`<sup>Required</sup> <a name="onUnauthenticatedRequest" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsAuthenticateOidcConfigOutputReference.property.onUnauthenticatedRequest"></a>

```java
public java.lang.String getOnUnauthenticatedRequest();
```

- *Type:* java.lang.String

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsAuthenticateOidcConfigOutputReference.property.scope"></a>

```java
public java.lang.String getScope();
```

- *Type:* java.lang.String

---

##### `sessionCookieName`<sup>Required</sup> <a name="sessionCookieName" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsAuthenticateOidcConfigOutputReference.property.sessionCookieName"></a>

```java
public java.lang.String getSessionCookieName();
```

- *Type:* java.lang.String

---

##### `sessionTimeout`<sup>Required</sup> <a name="sessionTimeout" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsAuthenticateOidcConfigOutputReference.property.sessionTimeout"></a>

```java
public java.lang.String getSessionTimeout();
```

- *Type:* java.lang.String

---

##### `tokenEndpoint`<sup>Required</sup> <a name="tokenEndpoint" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsAuthenticateOidcConfigOutputReference.property.tokenEndpoint"></a>

```java
public java.lang.String getTokenEndpoint();
```

- *Type:* java.lang.String

---

##### `useExistingClientSecret`<sup>Required</sup> <a name="useExistingClientSecret" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsAuthenticateOidcConfigOutputReference.property.useExistingClientSecret"></a>

```java
public java.lang.Boolean|IResolvable getUseExistingClientSecret();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `userInfoEndpoint`<sup>Required</sup> <a name="userInfoEndpoint" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsAuthenticateOidcConfigOutputReference.property.userInfoEndpoint"></a>

```java
public java.lang.String getUserInfoEndpoint();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsAuthenticateOidcConfigOutputReference.property.internalValue"></a>

```java
public IResolvable|Elasticloadbalancingv2ListenerDefaultActionsAuthenticateOidcConfig getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsAuthenticateOidcConfig">Elasticloadbalancingv2ListenerDefaultActionsAuthenticateOidcConfig</a>

---


### Elasticloadbalancingv2ListenerDefaultActionsFixedResponseConfigOutputReference <a name="Elasticloadbalancingv2ListenerDefaultActionsFixedResponseConfigOutputReference" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsFixedResponseConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsFixedResponseConfigOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.elasticloadbalancingv2_listener.Elasticloadbalancingv2ListenerDefaultActionsFixedResponseConfigOutputReference;

new Elasticloadbalancingv2ListenerDefaultActionsFixedResponseConfigOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsFixedResponseConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsFixedResponseConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsFixedResponseConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsFixedResponseConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsFixedResponseConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsFixedResponseConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsFixedResponseConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsFixedResponseConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsFixedResponseConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsFixedResponseConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsFixedResponseConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsFixedResponseConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsFixedResponseConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsFixedResponseConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsFixedResponseConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsFixedResponseConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsFixedResponseConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsFixedResponseConfigOutputReference.resetContentType">resetContentType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsFixedResponseConfigOutputReference.resetMessageBody">resetMessageBody</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsFixedResponseConfigOutputReference.resetStatusCode">resetStatusCode</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsFixedResponseConfigOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsFixedResponseConfigOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsFixedResponseConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsFixedResponseConfigOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsFixedResponseConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsFixedResponseConfigOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsFixedResponseConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsFixedResponseConfigOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsFixedResponseConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsFixedResponseConfigOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsFixedResponseConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsFixedResponseConfigOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsFixedResponseConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsFixedResponseConfigOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsFixedResponseConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsFixedResponseConfigOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsFixedResponseConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsFixedResponseConfigOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsFixedResponseConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsFixedResponseConfigOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsFixedResponseConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsFixedResponseConfigOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsFixedResponseConfigOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsFixedResponseConfigOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetContentType` <a name="resetContentType" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsFixedResponseConfigOutputReference.resetContentType"></a>

```java
public void resetContentType()
```

##### `resetMessageBody` <a name="resetMessageBody" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsFixedResponseConfigOutputReference.resetMessageBody"></a>

```java
public void resetMessageBody()
```

##### `resetStatusCode` <a name="resetStatusCode" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsFixedResponseConfigOutputReference.resetStatusCode"></a>

```java
public void resetStatusCode()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsFixedResponseConfigOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsFixedResponseConfigOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsFixedResponseConfigOutputReference.property.contentTypeInput">contentTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsFixedResponseConfigOutputReference.property.messageBodyInput">messageBodyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsFixedResponseConfigOutputReference.property.statusCodeInput">statusCodeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsFixedResponseConfigOutputReference.property.contentType">contentType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsFixedResponseConfigOutputReference.property.messageBody">messageBody</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsFixedResponseConfigOutputReference.property.statusCode">statusCode</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsFixedResponseConfigOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsFixedResponseConfig">Elasticloadbalancingv2ListenerDefaultActionsFixedResponseConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsFixedResponseConfigOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsFixedResponseConfigOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `contentTypeInput`<sup>Optional</sup> <a name="contentTypeInput" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsFixedResponseConfigOutputReference.property.contentTypeInput"></a>

```java
public java.lang.String getContentTypeInput();
```

- *Type:* java.lang.String

---

##### `messageBodyInput`<sup>Optional</sup> <a name="messageBodyInput" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsFixedResponseConfigOutputReference.property.messageBodyInput"></a>

```java
public java.lang.String getMessageBodyInput();
```

- *Type:* java.lang.String

---

##### `statusCodeInput`<sup>Optional</sup> <a name="statusCodeInput" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsFixedResponseConfigOutputReference.property.statusCodeInput"></a>

```java
public java.lang.String getStatusCodeInput();
```

- *Type:* java.lang.String

---

##### `contentType`<sup>Required</sup> <a name="contentType" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsFixedResponseConfigOutputReference.property.contentType"></a>

```java
public java.lang.String getContentType();
```

- *Type:* java.lang.String

---

##### `messageBody`<sup>Required</sup> <a name="messageBody" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsFixedResponseConfigOutputReference.property.messageBody"></a>

```java
public java.lang.String getMessageBody();
```

- *Type:* java.lang.String

---

##### `statusCode`<sup>Required</sup> <a name="statusCode" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsFixedResponseConfigOutputReference.property.statusCode"></a>

```java
public java.lang.String getStatusCode();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsFixedResponseConfigOutputReference.property.internalValue"></a>

```java
public IResolvable|Elasticloadbalancingv2ListenerDefaultActionsFixedResponseConfig getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsFixedResponseConfig">Elasticloadbalancingv2ListenerDefaultActionsFixedResponseConfig</a>

---


### Elasticloadbalancingv2ListenerDefaultActionsForwardConfigOutputReference <a name="Elasticloadbalancingv2ListenerDefaultActionsForwardConfigOutputReference" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsForwardConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsForwardConfigOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.elasticloadbalancingv2_listener.Elasticloadbalancingv2ListenerDefaultActionsForwardConfigOutputReference;

new Elasticloadbalancingv2ListenerDefaultActionsForwardConfigOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsForwardConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsForwardConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsForwardConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsForwardConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsForwardConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsForwardConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsForwardConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsForwardConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsForwardConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsForwardConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsForwardConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsForwardConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsForwardConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsForwardConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsForwardConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsForwardConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsForwardConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsForwardConfigOutputReference.putTargetGroups">putTargetGroups</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsForwardConfigOutputReference.putTargetGroupStickinessConfig">putTargetGroupStickinessConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsForwardConfigOutputReference.resetTargetGroups">resetTargetGroups</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsForwardConfigOutputReference.resetTargetGroupStickinessConfig">resetTargetGroupStickinessConfig</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsForwardConfigOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsForwardConfigOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsForwardConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsForwardConfigOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsForwardConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsForwardConfigOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsForwardConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsForwardConfigOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsForwardConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsForwardConfigOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsForwardConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsForwardConfigOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsForwardConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsForwardConfigOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsForwardConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsForwardConfigOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsForwardConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsForwardConfigOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsForwardConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsForwardConfigOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsForwardConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsForwardConfigOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsForwardConfigOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsForwardConfigOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putTargetGroups` <a name="putTargetGroups" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsForwardConfigOutputReference.putTargetGroups"></a>

```java
public void putTargetGroups(IResolvable|java.util.List<Elasticloadbalancingv2ListenerDefaultActionsForwardConfigTargetGroups> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsForwardConfigOutputReference.putTargetGroups.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsForwardConfigTargetGroups">Elasticloadbalancingv2ListenerDefaultActionsForwardConfigTargetGroups</a>>

---

##### `putTargetGroupStickinessConfig` <a name="putTargetGroupStickinessConfig" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsForwardConfigOutputReference.putTargetGroupStickinessConfig"></a>

```java
public void putTargetGroupStickinessConfig(Elasticloadbalancingv2ListenerDefaultActionsForwardConfigTargetGroupStickinessConfig value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsForwardConfigOutputReference.putTargetGroupStickinessConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsForwardConfigTargetGroupStickinessConfig">Elasticloadbalancingv2ListenerDefaultActionsForwardConfigTargetGroupStickinessConfig</a>

---

##### `resetTargetGroups` <a name="resetTargetGroups" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsForwardConfigOutputReference.resetTargetGroups"></a>

```java
public void resetTargetGroups()
```

##### `resetTargetGroupStickinessConfig` <a name="resetTargetGroupStickinessConfig" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsForwardConfigOutputReference.resetTargetGroupStickinessConfig"></a>

```java
public void resetTargetGroupStickinessConfig()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsForwardConfigOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsForwardConfigOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsForwardConfigOutputReference.property.targetGroups">targetGroups</a></code> | <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsForwardConfigTargetGroupsList">Elasticloadbalancingv2ListenerDefaultActionsForwardConfigTargetGroupsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsForwardConfigOutputReference.property.targetGroupStickinessConfig">targetGroupStickinessConfig</a></code> | <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsForwardConfigTargetGroupStickinessConfigOutputReference">Elasticloadbalancingv2ListenerDefaultActionsForwardConfigTargetGroupStickinessConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsForwardConfigOutputReference.property.targetGroupsInput">targetGroupsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsForwardConfigTargetGroups">Elasticloadbalancingv2ListenerDefaultActionsForwardConfigTargetGroups</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsForwardConfigOutputReference.property.targetGroupStickinessConfigInput">targetGroupStickinessConfigInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsForwardConfigTargetGroupStickinessConfig">Elasticloadbalancingv2ListenerDefaultActionsForwardConfigTargetGroupStickinessConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsForwardConfigOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsForwardConfig">Elasticloadbalancingv2ListenerDefaultActionsForwardConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsForwardConfigOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsForwardConfigOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `targetGroups`<sup>Required</sup> <a name="targetGroups" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsForwardConfigOutputReference.property.targetGroups"></a>

```java
public Elasticloadbalancingv2ListenerDefaultActionsForwardConfigTargetGroupsList getTargetGroups();
```

- *Type:* <a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsForwardConfigTargetGroupsList">Elasticloadbalancingv2ListenerDefaultActionsForwardConfigTargetGroupsList</a>

---

##### `targetGroupStickinessConfig`<sup>Required</sup> <a name="targetGroupStickinessConfig" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsForwardConfigOutputReference.property.targetGroupStickinessConfig"></a>

```java
public Elasticloadbalancingv2ListenerDefaultActionsForwardConfigTargetGroupStickinessConfigOutputReference getTargetGroupStickinessConfig();
```

- *Type:* <a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsForwardConfigTargetGroupStickinessConfigOutputReference">Elasticloadbalancingv2ListenerDefaultActionsForwardConfigTargetGroupStickinessConfigOutputReference</a>

---

##### `targetGroupsInput`<sup>Optional</sup> <a name="targetGroupsInput" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsForwardConfigOutputReference.property.targetGroupsInput"></a>

```java
public IResolvable|java.util.List<Elasticloadbalancingv2ListenerDefaultActionsForwardConfigTargetGroups> getTargetGroupsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsForwardConfigTargetGroups">Elasticloadbalancingv2ListenerDefaultActionsForwardConfigTargetGroups</a>>

---

##### `targetGroupStickinessConfigInput`<sup>Optional</sup> <a name="targetGroupStickinessConfigInput" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsForwardConfigOutputReference.property.targetGroupStickinessConfigInput"></a>

```java
public IResolvable|Elasticloadbalancingv2ListenerDefaultActionsForwardConfigTargetGroupStickinessConfig getTargetGroupStickinessConfigInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsForwardConfigTargetGroupStickinessConfig">Elasticloadbalancingv2ListenerDefaultActionsForwardConfigTargetGroupStickinessConfig</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsForwardConfigOutputReference.property.internalValue"></a>

```java
public IResolvable|Elasticloadbalancingv2ListenerDefaultActionsForwardConfig getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsForwardConfig">Elasticloadbalancingv2ListenerDefaultActionsForwardConfig</a>

---


### Elasticloadbalancingv2ListenerDefaultActionsForwardConfigTargetGroupsList <a name="Elasticloadbalancingv2ListenerDefaultActionsForwardConfigTargetGroupsList" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsForwardConfigTargetGroupsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsForwardConfigTargetGroupsList.Initializer"></a>

```java
import io.cdktn.providers.awscc.elasticloadbalancingv2_listener.Elasticloadbalancingv2ListenerDefaultActionsForwardConfigTargetGroupsList;

new Elasticloadbalancingv2ListenerDefaultActionsForwardConfigTargetGroupsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsForwardConfigTargetGroupsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsForwardConfigTargetGroupsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsForwardConfigTargetGroupsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsForwardConfigTargetGroupsList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsForwardConfigTargetGroupsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsForwardConfigTargetGroupsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsForwardConfigTargetGroupsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsForwardConfigTargetGroupsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsForwardConfigTargetGroupsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsForwardConfigTargetGroupsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsForwardConfigTargetGroupsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsForwardConfigTargetGroupsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsForwardConfigTargetGroupsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsForwardConfigTargetGroupsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsForwardConfigTargetGroupsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsForwardConfigTargetGroupsList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsForwardConfigTargetGroupsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsForwardConfigTargetGroupsList.get"></a>

```java
public Elasticloadbalancingv2ListenerDefaultActionsForwardConfigTargetGroupsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsForwardConfigTargetGroupsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsForwardConfigTargetGroupsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsForwardConfigTargetGroupsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsForwardConfigTargetGroupsList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsForwardConfigTargetGroups">Elasticloadbalancingv2ListenerDefaultActionsForwardConfigTargetGroups</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsForwardConfigTargetGroupsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsForwardConfigTargetGroupsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsForwardConfigTargetGroupsList.property.internalValue"></a>

```java
public IResolvable|java.util.List<Elasticloadbalancingv2ListenerDefaultActionsForwardConfigTargetGroups> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsForwardConfigTargetGroups">Elasticloadbalancingv2ListenerDefaultActionsForwardConfigTargetGroups</a>>

---


### Elasticloadbalancingv2ListenerDefaultActionsForwardConfigTargetGroupsOutputReference <a name="Elasticloadbalancingv2ListenerDefaultActionsForwardConfigTargetGroupsOutputReference" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsForwardConfigTargetGroupsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsForwardConfigTargetGroupsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.elasticloadbalancingv2_listener.Elasticloadbalancingv2ListenerDefaultActionsForwardConfigTargetGroupsOutputReference;

new Elasticloadbalancingv2ListenerDefaultActionsForwardConfigTargetGroupsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsForwardConfigTargetGroupsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsForwardConfigTargetGroupsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsForwardConfigTargetGroupsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsForwardConfigTargetGroupsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsForwardConfigTargetGroupsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsForwardConfigTargetGroupsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsForwardConfigTargetGroupsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsForwardConfigTargetGroupsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsForwardConfigTargetGroupsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsForwardConfigTargetGroupsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsForwardConfigTargetGroupsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsForwardConfigTargetGroupsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsForwardConfigTargetGroupsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsForwardConfigTargetGroupsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsForwardConfigTargetGroupsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsForwardConfigTargetGroupsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsForwardConfigTargetGroupsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsForwardConfigTargetGroupsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsForwardConfigTargetGroupsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsForwardConfigTargetGroupsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsForwardConfigTargetGroupsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsForwardConfigTargetGroupsOutputReference.resetTargetGroupArn">resetTargetGroupArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsForwardConfigTargetGroupsOutputReference.resetWeight">resetWeight</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsForwardConfigTargetGroupsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsForwardConfigTargetGroupsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsForwardConfigTargetGroupsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsForwardConfigTargetGroupsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsForwardConfigTargetGroupsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsForwardConfigTargetGroupsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsForwardConfigTargetGroupsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsForwardConfigTargetGroupsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsForwardConfigTargetGroupsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsForwardConfigTargetGroupsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsForwardConfigTargetGroupsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsForwardConfigTargetGroupsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsForwardConfigTargetGroupsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsForwardConfigTargetGroupsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsForwardConfigTargetGroupsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsForwardConfigTargetGroupsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsForwardConfigTargetGroupsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsForwardConfigTargetGroupsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsForwardConfigTargetGroupsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsForwardConfigTargetGroupsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsForwardConfigTargetGroupsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsForwardConfigTargetGroupsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsForwardConfigTargetGroupsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsForwardConfigTargetGroupsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetTargetGroupArn` <a name="resetTargetGroupArn" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsForwardConfigTargetGroupsOutputReference.resetTargetGroupArn"></a>

```java
public void resetTargetGroupArn()
```

##### `resetWeight` <a name="resetWeight" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsForwardConfigTargetGroupsOutputReference.resetWeight"></a>

```java
public void resetWeight()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsForwardConfigTargetGroupsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsForwardConfigTargetGroupsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsForwardConfigTargetGroupsOutputReference.property.targetGroupArnInput">targetGroupArnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsForwardConfigTargetGroupsOutputReference.property.weightInput">weightInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsForwardConfigTargetGroupsOutputReference.property.targetGroupArn">targetGroupArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsForwardConfigTargetGroupsOutputReference.property.weight">weight</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsForwardConfigTargetGroupsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsForwardConfigTargetGroups">Elasticloadbalancingv2ListenerDefaultActionsForwardConfigTargetGroups</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsForwardConfigTargetGroupsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsForwardConfigTargetGroupsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `targetGroupArnInput`<sup>Optional</sup> <a name="targetGroupArnInput" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsForwardConfigTargetGroupsOutputReference.property.targetGroupArnInput"></a>

```java
public java.lang.String getTargetGroupArnInput();
```

- *Type:* java.lang.String

---

##### `weightInput`<sup>Optional</sup> <a name="weightInput" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsForwardConfigTargetGroupsOutputReference.property.weightInput"></a>

```java
public java.lang.Number getWeightInput();
```

- *Type:* java.lang.Number

---

##### `targetGroupArn`<sup>Required</sup> <a name="targetGroupArn" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsForwardConfigTargetGroupsOutputReference.property.targetGroupArn"></a>

```java
public java.lang.String getTargetGroupArn();
```

- *Type:* java.lang.String

---

##### `weight`<sup>Required</sup> <a name="weight" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsForwardConfigTargetGroupsOutputReference.property.weight"></a>

```java
public java.lang.Number getWeight();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsForwardConfigTargetGroupsOutputReference.property.internalValue"></a>

```java
public IResolvable|Elasticloadbalancingv2ListenerDefaultActionsForwardConfigTargetGroups getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsForwardConfigTargetGroups">Elasticloadbalancingv2ListenerDefaultActionsForwardConfigTargetGroups</a>

---


### Elasticloadbalancingv2ListenerDefaultActionsForwardConfigTargetGroupStickinessConfigOutputReference <a name="Elasticloadbalancingv2ListenerDefaultActionsForwardConfigTargetGroupStickinessConfigOutputReference" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsForwardConfigTargetGroupStickinessConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsForwardConfigTargetGroupStickinessConfigOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.elasticloadbalancingv2_listener.Elasticloadbalancingv2ListenerDefaultActionsForwardConfigTargetGroupStickinessConfigOutputReference;

new Elasticloadbalancingv2ListenerDefaultActionsForwardConfigTargetGroupStickinessConfigOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsForwardConfigTargetGroupStickinessConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsForwardConfigTargetGroupStickinessConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsForwardConfigTargetGroupStickinessConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsForwardConfigTargetGroupStickinessConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsForwardConfigTargetGroupStickinessConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsForwardConfigTargetGroupStickinessConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsForwardConfigTargetGroupStickinessConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsForwardConfigTargetGroupStickinessConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsForwardConfigTargetGroupStickinessConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsForwardConfigTargetGroupStickinessConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsForwardConfigTargetGroupStickinessConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsForwardConfigTargetGroupStickinessConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsForwardConfigTargetGroupStickinessConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsForwardConfigTargetGroupStickinessConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsForwardConfigTargetGroupStickinessConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsForwardConfigTargetGroupStickinessConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsForwardConfigTargetGroupStickinessConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsForwardConfigTargetGroupStickinessConfigOutputReference.resetDurationSeconds">resetDurationSeconds</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsForwardConfigTargetGroupStickinessConfigOutputReference.resetEnabled">resetEnabled</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsForwardConfigTargetGroupStickinessConfigOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsForwardConfigTargetGroupStickinessConfigOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsForwardConfigTargetGroupStickinessConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsForwardConfigTargetGroupStickinessConfigOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsForwardConfigTargetGroupStickinessConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsForwardConfigTargetGroupStickinessConfigOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsForwardConfigTargetGroupStickinessConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsForwardConfigTargetGroupStickinessConfigOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsForwardConfigTargetGroupStickinessConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsForwardConfigTargetGroupStickinessConfigOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsForwardConfigTargetGroupStickinessConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsForwardConfigTargetGroupStickinessConfigOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsForwardConfigTargetGroupStickinessConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsForwardConfigTargetGroupStickinessConfigOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsForwardConfigTargetGroupStickinessConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsForwardConfigTargetGroupStickinessConfigOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsForwardConfigTargetGroupStickinessConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsForwardConfigTargetGroupStickinessConfigOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsForwardConfigTargetGroupStickinessConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsForwardConfigTargetGroupStickinessConfigOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsForwardConfigTargetGroupStickinessConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsForwardConfigTargetGroupStickinessConfigOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsForwardConfigTargetGroupStickinessConfigOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsForwardConfigTargetGroupStickinessConfigOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDurationSeconds` <a name="resetDurationSeconds" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsForwardConfigTargetGroupStickinessConfigOutputReference.resetDurationSeconds"></a>

```java
public void resetDurationSeconds()
```

##### `resetEnabled` <a name="resetEnabled" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsForwardConfigTargetGroupStickinessConfigOutputReference.resetEnabled"></a>

```java
public void resetEnabled()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsForwardConfigTargetGroupStickinessConfigOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsForwardConfigTargetGroupStickinessConfigOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsForwardConfigTargetGroupStickinessConfigOutputReference.property.durationSecondsInput">durationSecondsInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsForwardConfigTargetGroupStickinessConfigOutputReference.property.enabledInput">enabledInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsForwardConfigTargetGroupStickinessConfigOutputReference.property.durationSeconds">durationSeconds</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsForwardConfigTargetGroupStickinessConfigOutputReference.property.enabled">enabled</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsForwardConfigTargetGroupStickinessConfigOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsForwardConfigTargetGroupStickinessConfig">Elasticloadbalancingv2ListenerDefaultActionsForwardConfigTargetGroupStickinessConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsForwardConfigTargetGroupStickinessConfigOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsForwardConfigTargetGroupStickinessConfigOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `durationSecondsInput`<sup>Optional</sup> <a name="durationSecondsInput" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsForwardConfigTargetGroupStickinessConfigOutputReference.property.durationSecondsInput"></a>

```java
public java.lang.Number getDurationSecondsInput();
```

- *Type:* java.lang.Number

---

##### `enabledInput`<sup>Optional</sup> <a name="enabledInput" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsForwardConfigTargetGroupStickinessConfigOutputReference.property.enabledInput"></a>

```java
public java.lang.Boolean|IResolvable getEnabledInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `durationSeconds`<sup>Required</sup> <a name="durationSeconds" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsForwardConfigTargetGroupStickinessConfigOutputReference.property.durationSeconds"></a>

```java
public java.lang.Number getDurationSeconds();
```

- *Type:* java.lang.Number

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsForwardConfigTargetGroupStickinessConfigOutputReference.property.enabled"></a>

```java
public java.lang.Boolean|IResolvable getEnabled();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsForwardConfigTargetGroupStickinessConfigOutputReference.property.internalValue"></a>

```java
public IResolvable|Elasticloadbalancingv2ListenerDefaultActionsForwardConfigTargetGroupStickinessConfig getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsForwardConfigTargetGroupStickinessConfig">Elasticloadbalancingv2ListenerDefaultActionsForwardConfigTargetGroupStickinessConfig</a>

---


### Elasticloadbalancingv2ListenerDefaultActionsJwtValidationConfigAdditionalClaimsList <a name="Elasticloadbalancingv2ListenerDefaultActionsJwtValidationConfigAdditionalClaimsList" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsJwtValidationConfigAdditionalClaimsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsJwtValidationConfigAdditionalClaimsList.Initializer"></a>

```java
import io.cdktn.providers.awscc.elasticloadbalancingv2_listener.Elasticloadbalancingv2ListenerDefaultActionsJwtValidationConfigAdditionalClaimsList;

new Elasticloadbalancingv2ListenerDefaultActionsJwtValidationConfigAdditionalClaimsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsJwtValidationConfigAdditionalClaimsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsJwtValidationConfigAdditionalClaimsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsJwtValidationConfigAdditionalClaimsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsJwtValidationConfigAdditionalClaimsList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsJwtValidationConfigAdditionalClaimsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsJwtValidationConfigAdditionalClaimsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsJwtValidationConfigAdditionalClaimsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsJwtValidationConfigAdditionalClaimsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsJwtValidationConfigAdditionalClaimsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsJwtValidationConfigAdditionalClaimsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsJwtValidationConfigAdditionalClaimsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsJwtValidationConfigAdditionalClaimsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsJwtValidationConfigAdditionalClaimsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsJwtValidationConfigAdditionalClaimsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsJwtValidationConfigAdditionalClaimsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsJwtValidationConfigAdditionalClaimsList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsJwtValidationConfigAdditionalClaimsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsJwtValidationConfigAdditionalClaimsList.get"></a>

```java
public Elasticloadbalancingv2ListenerDefaultActionsJwtValidationConfigAdditionalClaimsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsJwtValidationConfigAdditionalClaimsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsJwtValidationConfigAdditionalClaimsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsJwtValidationConfigAdditionalClaimsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsJwtValidationConfigAdditionalClaimsList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsJwtValidationConfigAdditionalClaims">Elasticloadbalancingv2ListenerDefaultActionsJwtValidationConfigAdditionalClaims</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsJwtValidationConfigAdditionalClaimsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsJwtValidationConfigAdditionalClaimsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsJwtValidationConfigAdditionalClaimsList.property.internalValue"></a>

```java
public IResolvable|java.util.List<Elasticloadbalancingv2ListenerDefaultActionsJwtValidationConfigAdditionalClaims> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsJwtValidationConfigAdditionalClaims">Elasticloadbalancingv2ListenerDefaultActionsJwtValidationConfigAdditionalClaims</a>>

---


### Elasticloadbalancingv2ListenerDefaultActionsJwtValidationConfigAdditionalClaimsOutputReference <a name="Elasticloadbalancingv2ListenerDefaultActionsJwtValidationConfigAdditionalClaimsOutputReference" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsJwtValidationConfigAdditionalClaimsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsJwtValidationConfigAdditionalClaimsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.elasticloadbalancingv2_listener.Elasticloadbalancingv2ListenerDefaultActionsJwtValidationConfigAdditionalClaimsOutputReference;

new Elasticloadbalancingv2ListenerDefaultActionsJwtValidationConfigAdditionalClaimsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsJwtValidationConfigAdditionalClaimsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsJwtValidationConfigAdditionalClaimsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsJwtValidationConfigAdditionalClaimsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsJwtValidationConfigAdditionalClaimsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsJwtValidationConfigAdditionalClaimsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsJwtValidationConfigAdditionalClaimsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsJwtValidationConfigAdditionalClaimsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsJwtValidationConfigAdditionalClaimsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsJwtValidationConfigAdditionalClaimsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsJwtValidationConfigAdditionalClaimsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsJwtValidationConfigAdditionalClaimsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsJwtValidationConfigAdditionalClaimsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsJwtValidationConfigAdditionalClaimsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsJwtValidationConfigAdditionalClaimsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsJwtValidationConfigAdditionalClaimsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsJwtValidationConfigAdditionalClaimsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsJwtValidationConfigAdditionalClaimsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsJwtValidationConfigAdditionalClaimsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsJwtValidationConfigAdditionalClaimsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsJwtValidationConfigAdditionalClaimsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsJwtValidationConfigAdditionalClaimsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsJwtValidationConfigAdditionalClaimsOutputReference.resetFormat">resetFormat</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsJwtValidationConfigAdditionalClaimsOutputReference.resetName">resetName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsJwtValidationConfigAdditionalClaimsOutputReference.resetValues">resetValues</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsJwtValidationConfigAdditionalClaimsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsJwtValidationConfigAdditionalClaimsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsJwtValidationConfigAdditionalClaimsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsJwtValidationConfigAdditionalClaimsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsJwtValidationConfigAdditionalClaimsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsJwtValidationConfigAdditionalClaimsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsJwtValidationConfigAdditionalClaimsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsJwtValidationConfigAdditionalClaimsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsJwtValidationConfigAdditionalClaimsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsJwtValidationConfigAdditionalClaimsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsJwtValidationConfigAdditionalClaimsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsJwtValidationConfigAdditionalClaimsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsJwtValidationConfigAdditionalClaimsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsJwtValidationConfigAdditionalClaimsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsJwtValidationConfigAdditionalClaimsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsJwtValidationConfigAdditionalClaimsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsJwtValidationConfigAdditionalClaimsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsJwtValidationConfigAdditionalClaimsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsJwtValidationConfigAdditionalClaimsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsJwtValidationConfigAdditionalClaimsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsJwtValidationConfigAdditionalClaimsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsJwtValidationConfigAdditionalClaimsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsJwtValidationConfigAdditionalClaimsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsJwtValidationConfigAdditionalClaimsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetFormat` <a name="resetFormat" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsJwtValidationConfigAdditionalClaimsOutputReference.resetFormat"></a>

```java
public void resetFormat()
```

##### `resetName` <a name="resetName" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsJwtValidationConfigAdditionalClaimsOutputReference.resetName"></a>

```java
public void resetName()
```

##### `resetValues` <a name="resetValues" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsJwtValidationConfigAdditionalClaimsOutputReference.resetValues"></a>

```java
public void resetValues()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsJwtValidationConfigAdditionalClaimsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsJwtValidationConfigAdditionalClaimsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsJwtValidationConfigAdditionalClaimsOutputReference.property.formatInput">formatInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsJwtValidationConfigAdditionalClaimsOutputReference.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsJwtValidationConfigAdditionalClaimsOutputReference.property.valuesInput">valuesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsJwtValidationConfigAdditionalClaimsOutputReference.property.format">format</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsJwtValidationConfigAdditionalClaimsOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsJwtValidationConfigAdditionalClaimsOutputReference.property.values">values</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsJwtValidationConfigAdditionalClaimsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsJwtValidationConfigAdditionalClaims">Elasticloadbalancingv2ListenerDefaultActionsJwtValidationConfigAdditionalClaims</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsJwtValidationConfigAdditionalClaimsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsJwtValidationConfigAdditionalClaimsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `formatInput`<sup>Optional</sup> <a name="formatInput" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsJwtValidationConfigAdditionalClaimsOutputReference.property.formatInput"></a>

```java
public java.lang.String getFormatInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsJwtValidationConfigAdditionalClaimsOutputReference.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `valuesInput`<sup>Optional</sup> <a name="valuesInput" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsJwtValidationConfigAdditionalClaimsOutputReference.property.valuesInput"></a>

```java
public java.util.List<java.lang.String> getValuesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `format`<sup>Required</sup> <a name="format" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsJwtValidationConfigAdditionalClaimsOutputReference.property.format"></a>

```java
public java.lang.String getFormat();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsJwtValidationConfigAdditionalClaimsOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `values`<sup>Required</sup> <a name="values" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsJwtValidationConfigAdditionalClaimsOutputReference.property.values"></a>

```java
public java.util.List<java.lang.String> getValues();
```

- *Type:* java.util.List<java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsJwtValidationConfigAdditionalClaimsOutputReference.property.internalValue"></a>

```java
public IResolvable|Elasticloadbalancingv2ListenerDefaultActionsJwtValidationConfigAdditionalClaims getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsJwtValidationConfigAdditionalClaims">Elasticloadbalancingv2ListenerDefaultActionsJwtValidationConfigAdditionalClaims</a>

---


### Elasticloadbalancingv2ListenerDefaultActionsJwtValidationConfigOutputReference <a name="Elasticloadbalancingv2ListenerDefaultActionsJwtValidationConfigOutputReference" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsJwtValidationConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsJwtValidationConfigOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.elasticloadbalancingv2_listener.Elasticloadbalancingv2ListenerDefaultActionsJwtValidationConfigOutputReference;

new Elasticloadbalancingv2ListenerDefaultActionsJwtValidationConfigOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsJwtValidationConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsJwtValidationConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsJwtValidationConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsJwtValidationConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsJwtValidationConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsJwtValidationConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsJwtValidationConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsJwtValidationConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsJwtValidationConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsJwtValidationConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsJwtValidationConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsJwtValidationConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsJwtValidationConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsJwtValidationConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsJwtValidationConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsJwtValidationConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsJwtValidationConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsJwtValidationConfigOutputReference.putAdditionalClaims">putAdditionalClaims</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsJwtValidationConfigOutputReference.resetAdditionalClaims">resetAdditionalClaims</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsJwtValidationConfigOutputReference.resetIssuer">resetIssuer</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsJwtValidationConfigOutputReference.resetJwksEndpoint">resetJwksEndpoint</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsJwtValidationConfigOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsJwtValidationConfigOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsJwtValidationConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsJwtValidationConfigOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsJwtValidationConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsJwtValidationConfigOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsJwtValidationConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsJwtValidationConfigOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsJwtValidationConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsJwtValidationConfigOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsJwtValidationConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsJwtValidationConfigOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsJwtValidationConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsJwtValidationConfigOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsJwtValidationConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsJwtValidationConfigOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsJwtValidationConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsJwtValidationConfigOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsJwtValidationConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsJwtValidationConfigOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsJwtValidationConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsJwtValidationConfigOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsJwtValidationConfigOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsJwtValidationConfigOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putAdditionalClaims` <a name="putAdditionalClaims" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsJwtValidationConfigOutputReference.putAdditionalClaims"></a>

```java
public void putAdditionalClaims(IResolvable|java.util.List<Elasticloadbalancingv2ListenerDefaultActionsJwtValidationConfigAdditionalClaims> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsJwtValidationConfigOutputReference.putAdditionalClaims.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsJwtValidationConfigAdditionalClaims">Elasticloadbalancingv2ListenerDefaultActionsJwtValidationConfigAdditionalClaims</a>>

---

##### `resetAdditionalClaims` <a name="resetAdditionalClaims" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsJwtValidationConfigOutputReference.resetAdditionalClaims"></a>

```java
public void resetAdditionalClaims()
```

##### `resetIssuer` <a name="resetIssuer" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsJwtValidationConfigOutputReference.resetIssuer"></a>

```java
public void resetIssuer()
```

##### `resetJwksEndpoint` <a name="resetJwksEndpoint" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsJwtValidationConfigOutputReference.resetJwksEndpoint"></a>

```java
public void resetJwksEndpoint()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsJwtValidationConfigOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsJwtValidationConfigOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsJwtValidationConfigOutputReference.property.additionalClaims">additionalClaims</a></code> | <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsJwtValidationConfigAdditionalClaimsList">Elasticloadbalancingv2ListenerDefaultActionsJwtValidationConfigAdditionalClaimsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsJwtValidationConfigOutputReference.property.additionalClaimsInput">additionalClaimsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsJwtValidationConfigAdditionalClaims">Elasticloadbalancingv2ListenerDefaultActionsJwtValidationConfigAdditionalClaims</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsJwtValidationConfigOutputReference.property.issuerInput">issuerInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsJwtValidationConfigOutputReference.property.jwksEndpointInput">jwksEndpointInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsJwtValidationConfigOutputReference.property.issuer">issuer</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsJwtValidationConfigOutputReference.property.jwksEndpoint">jwksEndpoint</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsJwtValidationConfigOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsJwtValidationConfig">Elasticloadbalancingv2ListenerDefaultActionsJwtValidationConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsJwtValidationConfigOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsJwtValidationConfigOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `additionalClaims`<sup>Required</sup> <a name="additionalClaims" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsJwtValidationConfigOutputReference.property.additionalClaims"></a>

```java
public Elasticloadbalancingv2ListenerDefaultActionsJwtValidationConfigAdditionalClaimsList getAdditionalClaims();
```

- *Type:* <a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsJwtValidationConfigAdditionalClaimsList">Elasticloadbalancingv2ListenerDefaultActionsJwtValidationConfigAdditionalClaimsList</a>

---

##### `additionalClaimsInput`<sup>Optional</sup> <a name="additionalClaimsInput" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsJwtValidationConfigOutputReference.property.additionalClaimsInput"></a>

```java
public IResolvable|java.util.List<Elasticloadbalancingv2ListenerDefaultActionsJwtValidationConfigAdditionalClaims> getAdditionalClaimsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsJwtValidationConfigAdditionalClaims">Elasticloadbalancingv2ListenerDefaultActionsJwtValidationConfigAdditionalClaims</a>>

---

##### `issuerInput`<sup>Optional</sup> <a name="issuerInput" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsJwtValidationConfigOutputReference.property.issuerInput"></a>

```java
public java.lang.String getIssuerInput();
```

- *Type:* java.lang.String

---

##### `jwksEndpointInput`<sup>Optional</sup> <a name="jwksEndpointInput" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsJwtValidationConfigOutputReference.property.jwksEndpointInput"></a>

```java
public java.lang.String getJwksEndpointInput();
```

- *Type:* java.lang.String

---

##### `issuer`<sup>Required</sup> <a name="issuer" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsJwtValidationConfigOutputReference.property.issuer"></a>

```java
public java.lang.String getIssuer();
```

- *Type:* java.lang.String

---

##### `jwksEndpoint`<sup>Required</sup> <a name="jwksEndpoint" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsJwtValidationConfigOutputReference.property.jwksEndpoint"></a>

```java
public java.lang.String getJwksEndpoint();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsJwtValidationConfigOutputReference.property.internalValue"></a>

```java
public IResolvable|Elasticloadbalancingv2ListenerDefaultActionsJwtValidationConfig getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsJwtValidationConfig">Elasticloadbalancingv2ListenerDefaultActionsJwtValidationConfig</a>

---


### Elasticloadbalancingv2ListenerDefaultActionsList <a name="Elasticloadbalancingv2ListenerDefaultActionsList" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsList.Initializer"></a>

```java
import io.cdktn.providers.awscc.elasticloadbalancingv2_listener.Elasticloadbalancingv2ListenerDefaultActionsList;

new Elasticloadbalancingv2ListenerDefaultActionsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsList.get"></a>

```java
public Elasticloadbalancingv2ListenerDefaultActionsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActions">Elasticloadbalancingv2ListenerDefaultActions</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsList.property.internalValue"></a>

```java
public IResolvable|java.util.List<Elasticloadbalancingv2ListenerDefaultActions> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActions">Elasticloadbalancingv2ListenerDefaultActions</a>>

---


### Elasticloadbalancingv2ListenerDefaultActionsOutputReference <a name="Elasticloadbalancingv2ListenerDefaultActionsOutputReference" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.elasticloadbalancingv2_listener.Elasticloadbalancingv2ListenerDefaultActionsOutputReference;

new Elasticloadbalancingv2ListenerDefaultActionsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsOutputReference.putAuthenticateCognitoConfig">putAuthenticateCognitoConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsOutputReference.putAuthenticateOidcConfig">putAuthenticateOidcConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsOutputReference.putFixedResponseConfig">putFixedResponseConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsOutputReference.putForwardConfig">putForwardConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsOutputReference.putJwtValidationConfig">putJwtValidationConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsOutputReference.putRedirectConfig">putRedirectConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsOutputReference.resetAuthenticateCognitoConfig">resetAuthenticateCognitoConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsOutputReference.resetAuthenticateOidcConfig">resetAuthenticateOidcConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsOutputReference.resetFixedResponseConfig">resetFixedResponseConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsOutputReference.resetForwardConfig">resetForwardConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsOutputReference.resetJwtValidationConfig">resetJwtValidationConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsOutputReference.resetOrder">resetOrder</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsOutputReference.resetRedirectConfig">resetRedirectConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsOutputReference.resetTargetGroupArn">resetTargetGroupArn</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putAuthenticateCognitoConfig` <a name="putAuthenticateCognitoConfig" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsOutputReference.putAuthenticateCognitoConfig"></a>

```java
public void putAuthenticateCognitoConfig(Elasticloadbalancingv2ListenerDefaultActionsAuthenticateCognitoConfig value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsOutputReference.putAuthenticateCognitoConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsAuthenticateCognitoConfig">Elasticloadbalancingv2ListenerDefaultActionsAuthenticateCognitoConfig</a>

---

##### `putAuthenticateOidcConfig` <a name="putAuthenticateOidcConfig" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsOutputReference.putAuthenticateOidcConfig"></a>

```java
public void putAuthenticateOidcConfig(Elasticloadbalancingv2ListenerDefaultActionsAuthenticateOidcConfig value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsOutputReference.putAuthenticateOidcConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsAuthenticateOidcConfig">Elasticloadbalancingv2ListenerDefaultActionsAuthenticateOidcConfig</a>

---

##### `putFixedResponseConfig` <a name="putFixedResponseConfig" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsOutputReference.putFixedResponseConfig"></a>

```java
public void putFixedResponseConfig(Elasticloadbalancingv2ListenerDefaultActionsFixedResponseConfig value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsOutputReference.putFixedResponseConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsFixedResponseConfig">Elasticloadbalancingv2ListenerDefaultActionsFixedResponseConfig</a>

---

##### `putForwardConfig` <a name="putForwardConfig" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsOutputReference.putForwardConfig"></a>

```java
public void putForwardConfig(Elasticloadbalancingv2ListenerDefaultActionsForwardConfig value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsOutputReference.putForwardConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsForwardConfig">Elasticloadbalancingv2ListenerDefaultActionsForwardConfig</a>

---

##### `putJwtValidationConfig` <a name="putJwtValidationConfig" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsOutputReference.putJwtValidationConfig"></a>

```java
public void putJwtValidationConfig(Elasticloadbalancingv2ListenerDefaultActionsJwtValidationConfig value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsOutputReference.putJwtValidationConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsJwtValidationConfig">Elasticloadbalancingv2ListenerDefaultActionsJwtValidationConfig</a>

---

##### `putRedirectConfig` <a name="putRedirectConfig" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsOutputReference.putRedirectConfig"></a>

```java
public void putRedirectConfig(Elasticloadbalancingv2ListenerDefaultActionsRedirectConfig value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsOutputReference.putRedirectConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsRedirectConfig">Elasticloadbalancingv2ListenerDefaultActionsRedirectConfig</a>

---

##### `resetAuthenticateCognitoConfig` <a name="resetAuthenticateCognitoConfig" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsOutputReference.resetAuthenticateCognitoConfig"></a>

```java
public void resetAuthenticateCognitoConfig()
```

##### `resetAuthenticateOidcConfig` <a name="resetAuthenticateOidcConfig" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsOutputReference.resetAuthenticateOidcConfig"></a>

```java
public void resetAuthenticateOidcConfig()
```

##### `resetFixedResponseConfig` <a name="resetFixedResponseConfig" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsOutputReference.resetFixedResponseConfig"></a>

```java
public void resetFixedResponseConfig()
```

##### `resetForwardConfig` <a name="resetForwardConfig" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsOutputReference.resetForwardConfig"></a>

```java
public void resetForwardConfig()
```

##### `resetJwtValidationConfig` <a name="resetJwtValidationConfig" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsOutputReference.resetJwtValidationConfig"></a>

```java
public void resetJwtValidationConfig()
```

##### `resetOrder` <a name="resetOrder" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsOutputReference.resetOrder"></a>

```java
public void resetOrder()
```

##### `resetRedirectConfig` <a name="resetRedirectConfig" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsOutputReference.resetRedirectConfig"></a>

```java
public void resetRedirectConfig()
```

##### `resetTargetGroupArn` <a name="resetTargetGroupArn" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsOutputReference.resetTargetGroupArn"></a>

```java
public void resetTargetGroupArn()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsOutputReference.property.authenticateCognitoConfig">authenticateCognitoConfig</a></code> | <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsAuthenticateCognitoConfigOutputReference">Elasticloadbalancingv2ListenerDefaultActionsAuthenticateCognitoConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsOutputReference.property.authenticateOidcConfig">authenticateOidcConfig</a></code> | <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsAuthenticateOidcConfigOutputReference">Elasticloadbalancingv2ListenerDefaultActionsAuthenticateOidcConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsOutputReference.property.fixedResponseConfig">fixedResponseConfig</a></code> | <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsFixedResponseConfigOutputReference">Elasticloadbalancingv2ListenerDefaultActionsFixedResponseConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsOutputReference.property.forwardConfig">forwardConfig</a></code> | <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsForwardConfigOutputReference">Elasticloadbalancingv2ListenerDefaultActionsForwardConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsOutputReference.property.jwtValidationConfig">jwtValidationConfig</a></code> | <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsJwtValidationConfigOutputReference">Elasticloadbalancingv2ListenerDefaultActionsJwtValidationConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsOutputReference.property.redirectConfig">redirectConfig</a></code> | <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsRedirectConfigOutputReference">Elasticloadbalancingv2ListenerDefaultActionsRedirectConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsOutputReference.property.authenticateCognitoConfigInput">authenticateCognitoConfigInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsAuthenticateCognitoConfig">Elasticloadbalancingv2ListenerDefaultActionsAuthenticateCognitoConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsOutputReference.property.authenticateOidcConfigInput">authenticateOidcConfigInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsAuthenticateOidcConfig">Elasticloadbalancingv2ListenerDefaultActionsAuthenticateOidcConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsOutputReference.property.fixedResponseConfigInput">fixedResponseConfigInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsFixedResponseConfig">Elasticloadbalancingv2ListenerDefaultActionsFixedResponseConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsOutputReference.property.forwardConfigInput">forwardConfigInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsForwardConfig">Elasticloadbalancingv2ListenerDefaultActionsForwardConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsOutputReference.property.jwtValidationConfigInput">jwtValidationConfigInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsJwtValidationConfig">Elasticloadbalancingv2ListenerDefaultActionsJwtValidationConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsOutputReference.property.orderInput">orderInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsOutputReference.property.redirectConfigInput">redirectConfigInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsRedirectConfig">Elasticloadbalancingv2ListenerDefaultActionsRedirectConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsOutputReference.property.targetGroupArnInput">targetGroupArnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsOutputReference.property.typeInput">typeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsOutputReference.property.order">order</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsOutputReference.property.targetGroupArn">targetGroupArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsOutputReference.property.type">type</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActions">Elasticloadbalancingv2ListenerDefaultActions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `authenticateCognitoConfig`<sup>Required</sup> <a name="authenticateCognitoConfig" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsOutputReference.property.authenticateCognitoConfig"></a>

```java
public Elasticloadbalancingv2ListenerDefaultActionsAuthenticateCognitoConfigOutputReference getAuthenticateCognitoConfig();
```

- *Type:* <a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsAuthenticateCognitoConfigOutputReference">Elasticloadbalancingv2ListenerDefaultActionsAuthenticateCognitoConfigOutputReference</a>

---

##### `authenticateOidcConfig`<sup>Required</sup> <a name="authenticateOidcConfig" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsOutputReference.property.authenticateOidcConfig"></a>

```java
public Elasticloadbalancingv2ListenerDefaultActionsAuthenticateOidcConfigOutputReference getAuthenticateOidcConfig();
```

- *Type:* <a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsAuthenticateOidcConfigOutputReference">Elasticloadbalancingv2ListenerDefaultActionsAuthenticateOidcConfigOutputReference</a>

---

##### `fixedResponseConfig`<sup>Required</sup> <a name="fixedResponseConfig" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsOutputReference.property.fixedResponseConfig"></a>

```java
public Elasticloadbalancingv2ListenerDefaultActionsFixedResponseConfigOutputReference getFixedResponseConfig();
```

- *Type:* <a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsFixedResponseConfigOutputReference">Elasticloadbalancingv2ListenerDefaultActionsFixedResponseConfigOutputReference</a>

---

##### `forwardConfig`<sup>Required</sup> <a name="forwardConfig" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsOutputReference.property.forwardConfig"></a>

```java
public Elasticloadbalancingv2ListenerDefaultActionsForwardConfigOutputReference getForwardConfig();
```

- *Type:* <a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsForwardConfigOutputReference">Elasticloadbalancingv2ListenerDefaultActionsForwardConfigOutputReference</a>

---

##### `jwtValidationConfig`<sup>Required</sup> <a name="jwtValidationConfig" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsOutputReference.property.jwtValidationConfig"></a>

```java
public Elasticloadbalancingv2ListenerDefaultActionsJwtValidationConfigOutputReference getJwtValidationConfig();
```

- *Type:* <a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsJwtValidationConfigOutputReference">Elasticloadbalancingv2ListenerDefaultActionsJwtValidationConfigOutputReference</a>

---

##### `redirectConfig`<sup>Required</sup> <a name="redirectConfig" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsOutputReference.property.redirectConfig"></a>

```java
public Elasticloadbalancingv2ListenerDefaultActionsRedirectConfigOutputReference getRedirectConfig();
```

- *Type:* <a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsRedirectConfigOutputReference">Elasticloadbalancingv2ListenerDefaultActionsRedirectConfigOutputReference</a>

---

##### `authenticateCognitoConfigInput`<sup>Optional</sup> <a name="authenticateCognitoConfigInput" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsOutputReference.property.authenticateCognitoConfigInput"></a>

```java
public IResolvable|Elasticloadbalancingv2ListenerDefaultActionsAuthenticateCognitoConfig getAuthenticateCognitoConfigInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsAuthenticateCognitoConfig">Elasticloadbalancingv2ListenerDefaultActionsAuthenticateCognitoConfig</a>

---

##### `authenticateOidcConfigInput`<sup>Optional</sup> <a name="authenticateOidcConfigInput" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsOutputReference.property.authenticateOidcConfigInput"></a>

```java
public IResolvable|Elasticloadbalancingv2ListenerDefaultActionsAuthenticateOidcConfig getAuthenticateOidcConfigInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsAuthenticateOidcConfig">Elasticloadbalancingv2ListenerDefaultActionsAuthenticateOidcConfig</a>

---

##### `fixedResponseConfigInput`<sup>Optional</sup> <a name="fixedResponseConfigInput" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsOutputReference.property.fixedResponseConfigInput"></a>

```java
public IResolvable|Elasticloadbalancingv2ListenerDefaultActionsFixedResponseConfig getFixedResponseConfigInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsFixedResponseConfig">Elasticloadbalancingv2ListenerDefaultActionsFixedResponseConfig</a>

---

##### `forwardConfigInput`<sup>Optional</sup> <a name="forwardConfigInput" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsOutputReference.property.forwardConfigInput"></a>

```java
public IResolvable|Elasticloadbalancingv2ListenerDefaultActionsForwardConfig getForwardConfigInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsForwardConfig">Elasticloadbalancingv2ListenerDefaultActionsForwardConfig</a>

---

##### `jwtValidationConfigInput`<sup>Optional</sup> <a name="jwtValidationConfigInput" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsOutputReference.property.jwtValidationConfigInput"></a>

```java
public IResolvable|Elasticloadbalancingv2ListenerDefaultActionsJwtValidationConfig getJwtValidationConfigInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsJwtValidationConfig">Elasticloadbalancingv2ListenerDefaultActionsJwtValidationConfig</a>

---

##### `orderInput`<sup>Optional</sup> <a name="orderInput" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsOutputReference.property.orderInput"></a>

```java
public java.lang.Number getOrderInput();
```

- *Type:* java.lang.Number

---

##### `redirectConfigInput`<sup>Optional</sup> <a name="redirectConfigInput" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsOutputReference.property.redirectConfigInput"></a>

```java
public IResolvable|Elasticloadbalancingv2ListenerDefaultActionsRedirectConfig getRedirectConfigInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsRedirectConfig">Elasticloadbalancingv2ListenerDefaultActionsRedirectConfig</a>

---

##### `targetGroupArnInput`<sup>Optional</sup> <a name="targetGroupArnInput" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsOutputReference.property.targetGroupArnInput"></a>

```java
public java.lang.String getTargetGroupArnInput();
```

- *Type:* java.lang.String

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsOutputReference.property.typeInput"></a>

```java
public java.lang.String getTypeInput();
```

- *Type:* java.lang.String

---

##### `order`<sup>Required</sup> <a name="order" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsOutputReference.property.order"></a>

```java
public java.lang.Number getOrder();
```

- *Type:* java.lang.Number

---

##### `targetGroupArn`<sup>Required</sup> <a name="targetGroupArn" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsOutputReference.property.targetGroupArn"></a>

```java
public java.lang.String getTargetGroupArn();
```

- *Type:* java.lang.String

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsOutputReference.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsOutputReference.property.internalValue"></a>

```java
public IResolvable|Elasticloadbalancingv2ListenerDefaultActions getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActions">Elasticloadbalancingv2ListenerDefaultActions</a>

---


### Elasticloadbalancingv2ListenerDefaultActionsRedirectConfigOutputReference <a name="Elasticloadbalancingv2ListenerDefaultActionsRedirectConfigOutputReference" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsRedirectConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsRedirectConfigOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.elasticloadbalancingv2_listener.Elasticloadbalancingv2ListenerDefaultActionsRedirectConfigOutputReference;

new Elasticloadbalancingv2ListenerDefaultActionsRedirectConfigOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsRedirectConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsRedirectConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsRedirectConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsRedirectConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsRedirectConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsRedirectConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsRedirectConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsRedirectConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsRedirectConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsRedirectConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsRedirectConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsRedirectConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsRedirectConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsRedirectConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsRedirectConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsRedirectConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsRedirectConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsRedirectConfigOutputReference.resetHost">resetHost</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsRedirectConfigOutputReference.resetPath">resetPath</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsRedirectConfigOutputReference.resetPort">resetPort</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsRedirectConfigOutputReference.resetProtocol">resetProtocol</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsRedirectConfigOutputReference.resetQuery">resetQuery</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsRedirectConfigOutputReference.resetStatusCode">resetStatusCode</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsRedirectConfigOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsRedirectConfigOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsRedirectConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsRedirectConfigOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsRedirectConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsRedirectConfigOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsRedirectConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsRedirectConfigOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsRedirectConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsRedirectConfigOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsRedirectConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsRedirectConfigOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsRedirectConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsRedirectConfigOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsRedirectConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsRedirectConfigOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsRedirectConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsRedirectConfigOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsRedirectConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsRedirectConfigOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsRedirectConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsRedirectConfigOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsRedirectConfigOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsRedirectConfigOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetHost` <a name="resetHost" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsRedirectConfigOutputReference.resetHost"></a>

```java
public void resetHost()
```

##### `resetPath` <a name="resetPath" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsRedirectConfigOutputReference.resetPath"></a>

```java
public void resetPath()
```

##### `resetPort` <a name="resetPort" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsRedirectConfigOutputReference.resetPort"></a>

```java
public void resetPort()
```

##### `resetProtocol` <a name="resetProtocol" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsRedirectConfigOutputReference.resetProtocol"></a>

```java
public void resetProtocol()
```

##### `resetQuery` <a name="resetQuery" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsRedirectConfigOutputReference.resetQuery"></a>

```java
public void resetQuery()
```

##### `resetStatusCode` <a name="resetStatusCode" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsRedirectConfigOutputReference.resetStatusCode"></a>

```java
public void resetStatusCode()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsRedirectConfigOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsRedirectConfigOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsRedirectConfigOutputReference.property.hostInput">hostInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsRedirectConfigOutputReference.property.pathInput">pathInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsRedirectConfigOutputReference.property.portInput">portInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsRedirectConfigOutputReference.property.protocolInput">protocolInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsRedirectConfigOutputReference.property.queryInput">queryInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsRedirectConfigOutputReference.property.statusCodeInput">statusCodeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsRedirectConfigOutputReference.property.host">host</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsRedirectConfigOutputReference.property.path">path</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsRedirectConfigOutputReference.property.port">port</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsRedirectConfigOutputReference.property.protocol">protocol</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsRedirectConfigOutputReference.property.query">query</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsRedirectConfigOutputReference.property.statusCode">statusCode</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsRedirectConfigOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsRedirectConfig">Elasticloadbalancingv2ListenerDefaultActionsRedirectConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsRedirectConfigOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsRedirectConfigOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `hostInput`<sup>Optional</sup> <a name="hostInput" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsRedirectConfigOutputReference.property.hostInput"></a>

```java
public java.lang.String getHostInput();
```

- *Type:* java.lang.String

---

##### `pathInput`<sup>Optional</sup> <a name="pathInput" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsRedirectConfigOutputReference.property.pathInput"></a>

```java
public java.lang.String getPathInput();
```

- *Type:* java.lang.String

---

##### `portInput`<sup>Optional</sup> <a name="portInput" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsRedirectConfigOutputReference.property.portInput"></a>

```java
public java.lang.String getPortInput();
```

- *Type:* java.lang.String

---

##### `protocolInput`<sup>Optional</sup> <a name="protocolInput" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsRedirectConfigOutputReference.property.protocolInput"></a>

```java
public java.lang.String getProtocolInput();
```

- *Type:* java.lang.String

---

##### `queryInput`<sup>Optional</sup> <a name="queryInput" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsRedirectConfigOutputReference.property.queryInput"></a>

```java
public java.lang.String getQueryInput();
```

- *Type:* java.lang.String

---

##### `statusCodeInput`<sup>Optional</sup> <a name="statusCodeInput" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsRedirectConfigOutputReference.property.statusCodeInput"></a>

```java
public java.lang.String getStatusCodeInput();
```

- *Type:* java.lang.String

---

##### `host`<sup>Required</sup> <a name="host" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsRedirectConfigOutputReference.property.host"></a>

```java
public java.lang.String getHost();
```

- *Type:* java.lang.String

---

##### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsRedirectConfigOutputReference.property.path"></a>

```java
public java.lang.String getPath();
```

- *Type:* java.lang.String

---

##### `port`<sup>Required</sup> <a name="port" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsRedirectConfigOutputReference.property.port"></a>

```java
public java.lang.String getPort();
```

- *Type:* java.lang.String

---

##### `protocol`<sup>Required</sup> <a name="protocol" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsRedirectConfigOutputReference.property.protocol"></a>

```java
public java.lang.String getProtocol();
```

- *Type:* java.lang.String

---

##### `query`<sup>Required</sup> <a name="query" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsRedirectConfigOutputReference.property.query"></a>

```java
public java.lang.String getQuery();
```

- *Type:* java.lang.String

---

##### `statusCode`<sup>Required</sup> <a name="statusCode" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsRedirectConfigOutputReference.property.statusCode"></a>

```java
public java.lang.String getStatusCode();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsRedirectConfigOutputReference.property.internalValue"></a>

```java
public IResolvable|Elasticloadbalancingv2ListenerDefaultActionsRedirectConfig getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsRedirectConfig">Elasticloadbalancingv2ListenerDefaultActionsRedirectConfig</a>

---


### Elasticloadbalancingv2ListenerListenerAttributesList <a name="Elasticloadbalancingv2ListenerListenerAttributesList" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerListenerAttributesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerListenerAttributesList.Initializer"></a>

```java
import io.cdktn.providers.awscc.elasticloadbalancingv2_listener.Elasticloadbalancingv2ListenerListenerAttributesList;

new Elasticloadbalancingv2ListenerListenerAttributesList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerListenerAttributesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerListenerAttributesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerListenerAttributesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerListenerAttributesList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerListenerAttributesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerListenerAttributesList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerListenerAttributesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerListenerAttributesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerListenerAttributesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerListenerAttributesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerListenerAttributesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerListenerAttributesList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerListenerAttributesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerListenerAttributesList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerListenerAttributesList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerListenerAttributesList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerListenerAttributesList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerListenerAttributesList.get"></a>

```java
public Elasticloadbalancingv2ListenerListenerAttributesOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerListenerAttributesList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerListenerAttributesList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerListenerAttributesList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerListenerAttributesList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerListenerAttributes">Elasticloadbalancingv2ListenerListenerAttributes</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerListenerAttributesList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerListenerAttributesList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerListenerAttributesList.property.internalValue"></a>

```java
public IResolvable|java.util.List<Elasticloadbalancingv2ListenerListenerAttributes> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerListenerAttributes">Elasticloadbalancingv2ListenerListenerAttributes</a>>

---


### Elasticloadbalancingv2ListenerListenerAttributesOutputReference <a name="Elasticloadbalancingv2ListenerListenerAttributesOutputReference" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerListenerAttributesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerListenerAttributesOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.elasticloadbalancingv2_listener.Elasticloadbalancingv2ListenerListenerAttributesOutputReference;

new Elasticloadbalancingv2ListenerListenerAttributesOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerListenerAttributesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerListenerAttributesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerListenerAttributesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerListenerAttributesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerListenerAttributesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerListenerAttributesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerListenerAttributesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerListenerAttributesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerListenerAttributesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerListenerAttributesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerListenerAttributesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerListenerAttributesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerListenerAttributesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerListenerAttributesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerListenerAttributesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerListenerAttributesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerListenerAttributesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerListenerAttributesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerListenerAttributesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerListenerAttributesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerListenerAttributesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerListenerAttributesOutputReference.resetKey">resetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerListenerAttributesOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerListenerAttributesOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerListenerAttributesOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerListenerAttributesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerListenerAttributesOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerListenerAttributesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerListenerAttributesOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerListenerAttributesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerListenerAttributesOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerListenerAttributesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerListenerAttributesOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerListenerAttributesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerListenerAttributesOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerListenerAttributesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerListenerAttributesOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerListenerAttributesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerListenerAttributesOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerListenerAttributesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerListenerAttributesOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerListenerAttributesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerListenerAttributesOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerListenerAttributesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerListenerAttributesOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerListenerAttributesOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerListenerAttributesOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetKey` <a name="resetKey" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerListenerAttributesOutputReference.resetKey"></a>

```java
public void resetKey()
```

##### `resetValue` <a name="resetValue" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerListenerAttributesOutputReference.resetValue"></a>

```java
public void resetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerListenerAttributesOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerListenerAttributesOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerListenerAttributesOutputReference.property.keyInput">keyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerListenerAttributesOutputReference.property.valueInput">valueInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerListenerAttributesOutputReference.property.key">key</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerListenerAttributesOutputReference.property.value">value</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerListenerAttributesOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerListenerAttributes">Elasticloadbalancingv2ListenerListenerAttributes</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerListenerAttributesOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerListenerAttributesOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerListenerAttributesOutputReference.property.keyInput"></a>

```java
public java.lang.String getKeyInput();
```

- *Type:* java.lang.String

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerListenerAttributesOutputReference.property.valueInput"></a>

```java
public java.lang.String getValueInput();
```

- *Type:* java.lang.String

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerListenerAttributesOutputReference.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerListenerAttributesOutputReference.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerListenerAttributesOutputReference.property.internalValue"></a>

```java
public IResolvable|Elasticloadbalancingv2ListenerListenerAttributes getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerListenerAttributes">Elasticloadbalancingv2ListenerListenerAttributes</a>

---


### Elasticloadbalancingv2ListenerMutualAuthenticationOutputReference <a name="Elasticloadbalancingv2ListenerMutualAuthenticationOutputReference" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerMutualAuthenticationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerMutualAuthenticationOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.elasticloadbalancingv2_listener.Elasticloadbalancingv2ListenerMutualAuthenticationOutputReference;

new Elasticloadbalancingv2ListenerMutualAuthenticationOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerMutualAuthenticationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerMutualAuthenticationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerMutualAuthenticationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerMutualAuthenticationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerMutualAuthenticationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerMutualAuthenticationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerMutualAuthenticationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerMutualAuthenticationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerMutualAuthenticationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerMutualAuthenticationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerMutualAuthenticationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerMutualAuthenticationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerMutualAuthenticationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerMutualAuthenticationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerMutualAuthenticationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerMutualAuthenticationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerMutualAuthenticationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerMutualAuthenticationOutputReference.resetAdvertiseTrustStoreCaNames">resetAdvertiseTrustStoreCaNames</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerMutualAuthenticationOutputReference.resetIgnoreClientCertificateExpiry">resetIgnoreClientCertificateExpiry</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerMutualAuthenticationOutputReference.resetMode">resetMode</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerMutualAuthenticationOutputReference.resetTrustStoreArn">resetTrustStoreArn</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerMutualAuthenticationOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerMutualAuthenticationOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerMutualAuthenticationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerMutualAuthenticationOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerMutualAuthenticationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerMutualAuthenticationOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerMutualAuthenticationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerMutualAuthenticationOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerMutualAuthenticationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerMutualAuthenticationOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerMutualAuthenticationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerMutualAuthenticationOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerMutualAuthenticationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerMutualAuthenticationOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerMutualAuthenticationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerMutualAuthenticationOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerMutualAuthenticationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerMutualAuthenticationOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerMutualAuthenticationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerMutualAuthenticationOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerMutualAuthenticationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerMutualAuthenticationOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerMutualAuthenticationOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerMutualAuthenticationOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAdvertiseTrustStoreCaNames` <a name="resetAdvertiseTrustStoreCaNames" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerMutualAuthenticationOutputReference.resetAdvertiseTrustStoreCaNames"></a>

```java
public void resetAdvertiseTrustStoreCaNames()
```

##### `resetIgnoreClientCertificateExpiry` <a name="resetIgnoreClientCertificateExpiry" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerMutualAuthenticationOutputReference.resetIgnoreClientCertificateExpiry"></a>

```java
public void resetIgnoreClientCertificateExpiry()
```

##### `resetMode` <a name="resetMode" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerMutualAuthenticationOutputReference.resetMode"></a>

```java
public void resetMode()
```

##### `resetTrustStoreArn` <a name="resetTrustStoreArn" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerMutualAuthenticationOutputReference.resetTrustStoreArn"></a>

```java
public void resetTrustStoreArn()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerMutualAuthenticationOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerMutualAuthenticationOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerMutualAuthenticationOutputReference.property.advertiseTrustStoreCaNamesInput">advertiseTrustStoreCaNamesInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerMutualAuthenticationOutputReference.property.ignoreClientCertificateExpiryInput">ignoreClientCertificateExpiryInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerMutualAuthenticationOutputReference.property.modeInput">modeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerMutualAuthenticationOutputReference.property.trustStoreArnInput">trustStoreArnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerMutualAuthenticationOutputReference.property.advertiseTrustStoreCaNames">advertiseTrustStoreCaNames</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerMutualAuthenticationOutputReference.property.ignoreClientCertificateExpiry">ignoreClientCertificateExpiry</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerMutualAuthenticationOutputReference.property.mode">mode</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerMutualAuthenticationOutputReference.property.trustStoreArn">trustStoreArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerMutualAuthenticationOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerMutualAuthentication">Elasticloadbalancingv2ListenerMutualAuthentication</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerMutualAuthenticationOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerMutualAuthenticationOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `advertiseTrustStoreCaNamesInput`<sup>Optional</sup> <a name="advertiseTrustStoreCaNamesInput" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerMutualAuthenticationOutputReference.property.advertiseTrustStoreCaNamesInput"></a>

```java
public java.lang.String getAdvertiseTrustStoreCaNamesInput();
```

- *Type:* java.lang.String

---

##### `ignoreClientCertificateExpiryInput`<sup>Optional</sup> <a name="ignoreClientCertificateExpiryInput" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerMutualAuthenticationOutputReference.property.ignoreClientCertificateExpiryInput"></a>

```java
public java.lang.Boolean|IResolvable getIgnoreClientCertificateExpiryInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `modeInput`<sup>Optional</sup> <a name="modeInput" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerMutualAuthenticationOutputReference.property.modeInput"></a>

```java
public java.lang.String getModeInput();
```

- *Type:* java.lang.String

---

##### `trustStoreArnInput`<sup>Optional</sup> <a name="trustStoreArnInput" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerMutualAuthenticationOutputReference.property.trustStoreArnInput"></a>

```java
public java.lang.String getTrustStoreArnInput();
```

- *Type:* java.lang.String

---

##### `advertiseTrustStoreCaNames`<sup>Required</sup> <a name="advertiseTrustStoreCaNames" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerMutualAuthenticationOutputReference.property.advertiseTrustStoreCaNames"></a>

```java
public java.lang.String getAdvertiseTrustStoreCaNames();
```

- *Type:* java.lang.String

---

##### `ignoreClientCertificateExpiry`<sup>Required</sup> <a name="ignoreClientCertificateExpiry" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerMutualAuthenticationOutputReference.property.ignoreClientCertificateExpiry"></a>

```java
public java.lang.Boolean|IResolvable getIgnoreClientCertificateExpiry();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `mode`<sup>Required</sup> <a name="mode" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerMutualAuthenticationOutputReference.property.mode"></a>

```java
public java.lang.String getMode();
```

- *Type:* java.lang.String

---

##### `trustStoreArn`<sup>Required</sup> <a name="trustStoreArn" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerMutualAuthenticationOutputReference.property.trustStoreArn"></a>

```java
public java.lang.String getTrustStoreArn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerMutualAuthenticationOutputReference.property.internalValue"></a>

```java
public IResolvable|Elasticloadbalancingv2ListenerMutualAuthentication getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerMutualAuthentication">Elasticloadbalancingv2ListenerMutualAuthentication</a>

---


### Elasticloadbalancingv2ListenerTagsList <a name="Elasticloadbalancingv2ListenerTagsList" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerTagsList.Initializer"></a>

```java
import io.cdktn.providers.awscc.elasticloadbalancingv2_listener.Elasticloadbalancingv2ListenerTagsList;

new Elasticloadbalancingv2ListenerTagsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerTagsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerTagsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerTagsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerTagsList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerTagsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerTagsList.get"></a>

```java
public Elasticloadbalancingv2ListenerTagsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerTagsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerTagsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerTagsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerTagsList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerTags">Elasticloadbalancingv2ListenerTags</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerTagsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerTagsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerTagsList.property.internalValue"></a>

```java
public IResolvable|java.util.List<Elasticloadbalancingv2ListenerTags> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerTags">Elasticloadbalancingv2ListenerTags</a>>

---


### Elasticloadbalancingv2ListenerTagsOutputReference <a name="Elasticloadbalancingv2ListenerTagsOutputReference" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerTagsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.elasticloadbalancingv2_listener.Elasticloadbalancingv2ListenerTagsOutputReference;

new Elasticloadbalancingv2ListenerTagsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerTagsOutputReference.resetKey">resetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerTagsOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerTagsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerTagsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerTagsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerTagsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerTagsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerTagsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerTagsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerTagsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerTagsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerTagsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerTagsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerTagsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerTagsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerTagsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetKey` <a name="resetKey" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerTagsOutputReference.resetKey"></a>

```java
public void resetKey()
```

##### `resetValue` <a name="resetValue" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerTagsOutputReference.resetValue"></a>

```java
public void resetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerTagsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerTagsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerTagsOutputReference.property.keyInput">keyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerTagsOutputReference.property.valueInput">valueInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerTagsOutputReference.property.key">key</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerTagsOutputReference.property.value">value</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerTagsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerTags">Elasticloadbalancingv2ListenerTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerTagsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerTagsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerTagsOutputReference.property.keyInput"></a>

```java
public java.lang.String getKeyInput();
```

- *Type:* java.lang.String

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerTagsOutputReference.property.valueInput"></a>

```java
public java.lang.String getValueInput();
```

- *Type:* java.lang.String

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerTagsOutputReference.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerTagsOutputReference.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerTagsOutputReference.property.internalValue"></a>

```java
public IResolvable|Elasticloadbalancingv2ListenerTags getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerTags">Elasticloadbalancingv2ListenerTags</a>

---



